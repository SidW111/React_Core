import React, { useState } from "react";
import Highlight from "./ReUsable/HighLight";
import Wrapper from "./ReUsable/Wrapper";

export default function ControlledVsUnControlled() {
  const [input, setInput] = useState<string>("");
  const handleControlled = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
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

      <input
        type="text"
        value={input}
        placeholder="Enter your name"
        onChange={handleControlled}
      />

      <p className="font-bold pt-2">Uncontrolled Components</p>
      <div>
        <ul className="list-disc pl-5">
          <li>React does not controls the input values.</li>
          <li>
            Every change updates React state with <Highlight>useRef</Highlight>.
          </li>
        </ul>
      </div>
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
