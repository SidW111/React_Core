import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BackToHome() {
  return (
    <div className="flex justify-end items-center mt-4 w-full">
      <Link
        to="/"
        className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-700 text-white text-sm font-medium shadow-md 
                   hover:bg-blue-800 active:scale-95 transition-transform duration-150"
      >
        <FaLongArrowAltLeft /> Back to Home
      </Link>
    </div>
  );
}
