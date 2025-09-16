import type { ReactNode } from "react";

export default function Code({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-900 text-white p-3 rounded-xl mt-2 mb-2 w-full max-w-full">
      <pre className="whitespace-pre-wrap break-all text-xs sm:text-sm md:text-base max-w-full">
        {children}
      </pre>
    </div>
  );
}
