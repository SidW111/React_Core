import React, { useRef, useState } from "react";
import Highlight from "./ReUsable/HighLight";
import Wrapper from "./ReUsable/Wrapper";

export default function ControlledVsUnControlled() {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUncontrolled = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
  };

  const handleControlled = () => {
    console.log(input);
  };
  return (
    <Wrapper title="Controlled Vs UnControlled">
      <p>
        {" "}
        <span className="font-bold">Forms</span> are essential in React (login,
        signup, search bars, etc.)
      </p>
      <p>There are two ways two handle them:</p>
      <p className="font-bold pt-2">Controlled Components</p>
      <div>
        <ul className="list-disc pl-5">
          <li>React controls the input values.</li>
          <li>
            The value is accessed directly via DOM using{" "}
            <Highlight>useState</Highlight>.
          </li>
        </ul>
      </div>
      <div className="pt-1 flex gap-2">
        <input
          className="border border-black rounded px-2 py-0.5 placeholder:text-black"
          type="text"
          value={input}
          placeholder="Enter your name"
          onChange={(e) => {setInput(e.target.value)}}
        />
        <button
          className="bg-gray-200 border border-black px-2 py-1 rounded-md  hover:bg-gray-400/50 transition-all duration-300"
          type="submit"
          onClick={handleControlled}
        >
          {" "}
          submit{" "}
        </button>
      </div>
      <p>React reads the value on every keyStroke</p>

      <p className="font-bold pt-2">Uncontrolled Components</p>
      <div>
        <ul className="list-disc pl-5">
          <li>React does not controls the input values.</li>
          <li>
            Every change updates React state with <Highlight>useRef</Highlight>.
          </li>
        </ul>
      </div>
      <form onSubmit={handleUncontrolled} className="pt-1 flex gap-2">
        <input
          className="border border-black rounded px-2 py-0.5 placeholder:text-black"
          type="text"
          placeholder="Enter your name"
          ref={inputRef}
        />
        <button
          className="bg-gray-200 border border-black px-2 py-1 rounded-md  hover:bg-gray-400/50 transition-all duration-300"
          type="submit"
        >
          {" "}
          submit{" "}
        </button>
      </form>
            <p>React reads the value when needed, not on every keyStroke</p>

      <p className="font-bold pt-2 pb-2">Real World analogy</p>
      <p>
        <span className="font-bold">Controlled</span>:- Teacher watching every
        student’s notebook while they write.
      </p>
      <p>React updates on every change.</p>
      <p>
        <span className="font-bold ">Uncontrolled</span>:- Teacher only checks
        the notebook at the end.
      </p>
      <p>React reads the value when submitting.</p>
    </Wrapper>
  );
}
