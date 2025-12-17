import { AiFillTikTok } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
import { assets, cloudinaryImageUrl } from "../../constants/cloudinary";

const Footer = () => {
  return (
    <footer className="bg-mutedbrown py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 justify-center px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="flex justify-center md:justify-start">
          <img
            src={cloudinaryImageUrl(assets.logos.vertical.publicId)}
            alt={assets.logos.vertical.alt}
            className="h-[120px] w-[100px] object-cover"
          />
        </div>
        {/* Shop links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4"></h3>
          <ul className="space-y-2 text-acloblue">
            {CATEGORIES.map((category) => (
              <li key={category}>
                <Link
                  // to={`/collections/${category.toLowerCase().replace(/\s+/g, "-")}`}
                  to="#"
                  className="text-acloblue transition-colors"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Support links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4"></h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="text-acloblue transition-colors">
                LEARN MORE
              </Link>
            </li>
            <li>
              <Link to="#" className="text-acloblue transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="#" className="text-acloblue transition-colors">
                TERMS & POLICIES
              </Link>
            </li>
            <li>
              <Link to="#" className="text-acloblue transition-colors">
                DELIVERY & EXCHANGE
              </Link>
            </li>
          </ul>
        </div>
        {/* Follow us section */}
        <div>
          <h3 className="text-lg text-acloblue mb-4">Stay in Touch</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new offers and exclusive events
          </p>
          {/* <p className="font-medium text-sm text-gray-600 mb-6">
            Sign up and get 10% off your first order.
          </p> */}
          {/* Newsletter form */}
          <form action="" className="flex">
            <input
              type="email"
              placeholder="Leave us your email"
              className="p-3 w-full text-sm border-t border-l border-b border-acloblue rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-acloblue text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-8 px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Follow Us */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold text-acloblue mb-3">
              Follow Us
            </h3>
            <div className="flex items-center gap-4 justify-center md:justify-start text-gray-700">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
                aria-label="Instagram"
              >
                <IoLogoInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
                aria-label="Facebook"
              >
                <FaSquareFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
                aria-label="TikTok"
              >
                <AiFillTikTok className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="text-center md:text-right">
            <h3 className="text-base font-semibold text-acloblue mb-3">
              WhatsApp Us
            </h3>
            <a
              href="https://api.whatsapp.com/send?phone=6282128528968&text=Halo%20ACLO!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center md:justify-end gap-2 text-gray-700 hover:text-gray-500"
            >
              <FiPhoneCall className="h-5 w-5" />
              <span>+62 821-2852-8968</span>
            </a>
          </div>
        </div>

        <p className="text-gray-500 text-sm tracking-tight text-center mt-8">
          © 2025, Aclo. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
