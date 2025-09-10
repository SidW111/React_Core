import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import Wrapper from "./ReUsable/Wrapper";
import Code from "./ReUsable/Code";

export default function UseState() {
  const [count, setCount] = useState<number>(0);

  return (
    <Wrapper title="UseState">
    
        <p>
          useState is a react hook that lets u add a state to a functional
          component
          <br />
          It helps the component to remember the values begtween renders
          <br />
          update the UI when that value changes
        </p>

        <div>
          syntax :-
          <Code>const [state,setState]= useState(initialValue)</Code>
          <p>state &rarr; the current value</p>
          <p>
            setState &rarr; a function to update the value || the setter
            function
          </p>
          <p>
            initialValue &rarr; the starting value
            (number,string,object,array,boolean,functions,etc)
          </p>
        </div>

        <p className="text-center p-2 font-bold">Example</p>
        <div className="flex justify-center items-center gap-3 ">
          <p className="rounded bg-gray-200 px-4 py-1 font-semibold flex items-center gap-1">
            counter : <span className="">{count}</span>{" "}
          </p>
          <button
            className="px-4 py-1 font-semibold rounded bg-gray-200 flex items-center gap-1"
            onClick={() => setCount(count + 1)}
          >
            Count <FaArrowUp />
          </button>
          <button
            className="px-4 py-1 font-semibold rounded bg-gray-200 flex items-center gap-1"
            onClick={() => setCount(count - 1)}
          >
            Count <FaArrowDown />
          </button>
        </div>
      
    </Wrapper>
  );
}
