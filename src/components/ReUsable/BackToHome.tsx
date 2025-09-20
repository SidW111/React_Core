import { Link } from "react-router-dom";

export default function BackToHome() {
  return (
    <div className="flex justify-between items-center mt-4 w-full">
      <footer className="text-center py-4 text-sm font-bold text-gray-800">
        Made by Sid with ❤️
      </footer>
      <p>
        <Link
          to="/"
          className="inline-block px-4 py-2 rounded-xl bg-blue-700 text-white text-sm font-medium shadow-md 
                   hover:bg-blue-800 active:scale-95 transition-transform duration-150"
        >
          ⬅ Back to Home
        </Link>
      </p>
    </div>
  );
}
