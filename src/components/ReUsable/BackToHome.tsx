import { Link } from "react-router-dom";

export default function BackToHome() {
  return (
    <div className="flex justify-end items-center mt-4 w-full">
      <Link
        to="/"
        className="inline-block px-4 py-2 rounded-xl bg-blue-700 text-white text-center text-sm font-medium shadow-md 
                   hover:bg-blue-800 active:scale-95 transition-transform duration-150"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}
