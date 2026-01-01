import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";
import { API_URL } from "../../constants/api";

const Payment = () => {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { checkout } = useAppSelector((state) => state.checkout);
  const [uploading, setUploading] = useState<boolean>(false);
  const [screenshot, setScreenshot] = useState<string>("");
  useEffect(() => {
    if (!checkout) {
      navigate("/checkout");
    }
  }, [checkout, navigate]);

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
  return (
    <div>
      <div className="max-w-4xl mx-auto py-10 px-6 tracking-tighter">
        <div className="text-2xl uppercase">Payment Instructions</div>
        <div>
          Your total purchase cost is IDR{" "}
          <span> {(checkout?.totalPrice ?? 0).toLocaleString()}</span>
        </div>
        <div>
          Please do a bank transfer to this account xxxxxxxxxxxxx and upload a
          screenshot of the proof of transaction
        </div>
        {uploading && <p>Uploading image...</p>}
        <input type="file" onChange={handleImageUpload} className="mb-2" />
      </div>
      {screenshot && (
        <p className="text-sm text-gray-600 mt-2">
          Uploaded: <span className="break-all">{screenshot}</span>
        </p>
      )}
      <p className="text-base text-gray-500 mt-4">
        After payment, we will confirm your transaction and create your order
        within 1-2 business days.
      </p>
    </div>
  );
};

export default Payment;
