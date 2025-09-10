import type { ReactNode } from "react";

export default function Highlight({children}:{children:ReactNode}){
return <span className="bg-gray-200 px-2 py-1 rounded-md">
    {children}
</span>
}