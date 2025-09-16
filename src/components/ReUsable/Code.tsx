import type { ReactNode } from "react";

export default function Code({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-900 text-white p-3 rounded-xl mt-2 mb-2">
      <pre className="whitespace-pre-wrap break-words text-sm md:text-base">
      {children}
      </pre>
    </div>
  );
}
