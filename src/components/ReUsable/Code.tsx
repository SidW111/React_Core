import type { ReactNode } from "react";

export default function Code({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-900 text-white p-3 rounded-xl mt-2">{children}</div>
  );
}
