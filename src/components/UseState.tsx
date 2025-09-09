import { useState } from "react";

export default function UseState(){
    const [count,setCount] = useState<number>(0)

    return <div className="h-screen w-screen flex flex-col items-center justify-center gap-2">
        <h1> 
            useState is a react hook that lets u add a state to a functional component
            It helps the component to remember the values begtween renders and update the UI when that value changes
        </h1>
        <h1>
            syntax
            const [state,setState]= useState(initialValue)
            state &rarr; the current value
            setState &rarr; a function to update the value || the setter function
            initialValue &rarr; the starting value (can be a number,string,object,array,boolean,functions,etc)
        </h1>
        <p className="">count : <span className="">{count}</span> </p>
        <button className="px-4 py-1 rounded bg-gray-200" onClick={()=>setCount(count+1)}>Count</button>
    </div>
}