import { Link } from "react-router-dom";

export default function BackToHome() {
  return (
    <div className="flex justify-end items-end mt-2">
      <Link to="/" className="hover:underline">
        &gt;&gt; Back to home
      </Link>
    </div>
  );
}
