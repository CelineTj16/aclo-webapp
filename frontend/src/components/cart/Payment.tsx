import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";
import { API_URL, getAuthHeader } from "../../constants/api";
import LoadingOverlay from "../common/LoadingOverlay";

const REDIRECT_AFTER_MS = 2000;

const Payment = () => {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    checkout,
    loading: checkoutLoading,
    error,
  } = useAppSelector((state) => state.checkout);
  const [uploading, setUploading] = useState<boolean>(false);
  const [screenshot, setScreenshot] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!checkoutLoading && !checkout) {
      setLoading(true);
      return;
    }

    if (checkout) {
      setLoading(false);
      return;
    }

    setLoading(true);

    const t = setTimeout(() => {
      navigate("/checkout");
    }, REDIRECT_AFTER_MS);

    return () => clearTimeout(t);
  }, [checkout, navigate, checkoutLoading]);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);
      const { data } = await axios.post(`${API_URL}/api/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setScreenshot(data.publicId);
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    if (!checkout?._id) return;

    try {
      setSubmitting(true);

      await axios.post(
        `${API_URL}/api/checkout/${checkout._id}/finalize`,
        { publicId: screenshot }, // optional: send proof id to backend
        { headers: getAuthHeader() }
      );

      navigate("/order-confirmation");
    } catch (err) {
      console.error(err);
      // optionally show toast / set local error message
    } finally {
      setSubmitting(false);
    }
  };

  if (error) return <p>Error: {error}</p>;
  return (
    <div className="flex justify-center px-4 py-10">
      <LoadingOverlay show={loading} />
      <div className="max-w-4xl border-black border-2 rounded-lg mx-auto py-10 px-6 tracking-tighter">
        <div className="text-3xl uppercase mb-4 text-acloblue">
          Payment Instructions
        </div>
        <div className="text-xl mb-2">
          Your total purchase cost is{" "}
          <span className="font-semibold">
            IDR {(checkout?.totalPrice ?? 0).toLocaleString()}
          </span>
          .
        </div>
        <div className="text-xl mb-2">
          Please do a bank transfer to this account xxxxxxxxxxxxx and upload a
          screenshot of the proof of transaction. If a proof of transaction is
          not provided or is deemed invalid, we cannot process your order.
        </div>
        {uploading && <p>Uploading image...</p>}
        <input
          type="file"
          onChange={handleImageUpload}
          className="w-full text-sm text-gray-600
            file:mr-4 file:py-2 file:px-4
            file:rounded file:border-0
            file:bg-black file:text-white
            file:cursor-pointer
            hover:file:bg-gray-800
            mb-2 mt-2"
        />
        {screenshot && (
          <p className="text-sm text-gray-600 mt-2">
            Uploaded: <span className="break-all">{screenshot}</span>
          </p>
        )}
        <div className="text-base text-gray-500 mt-4">
          After payment, we will confirm your transaction and create your order
          within 1-2 business days.
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={screenshot.length === 0 || submitting || !checkout?._id}
          className="w-full bg-black text-white py-3 rounded disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-gray-800 transition cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Payment;
