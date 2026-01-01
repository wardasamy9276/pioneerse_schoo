import {
  FaFacebookF,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
export default function iconsList() {
  return (
    <div>
      <div
        className="
        w-full flex justify-center items-center
        gap-5 pt-6 "
      >
        <a href="#" className="text-blue-600 hover:scale-110 transition">
          <FaFacebookF size={35} />
        </a>

        <a href="#" className="text-sky-500 hover:scale-110 transition">
          <FaTelegramPlane size={35} />
        </a>

        <a href="#" className="text-green-500 hover:scale-110 transition">
          <FaWhatsapp size={35} />
        </a>

        <a href="#" className="text-red-600 hover:scale-110 transition">
          <FaYoutube size={35} />
        </a>
      </div>
    </div>
  );
}
