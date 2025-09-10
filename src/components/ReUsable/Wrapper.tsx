import type { ReactNode } from "react";


export default function Wrapper({ title,children }: { title: string,children:ReactNode }) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold text-center">{title}</h1>
      <div className="font-semibold tracking-tight">
        <div className="p-2 flex flex-col gap-1">
            {children}
        </div>
      </div>
    </div>
  );
}
