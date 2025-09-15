import BackToHome from "./ReUsable/BackToHome";
import Code from "./ReUsable/Code";
import Highlight from "./ReUsable/HighLight";
import Wrapper from "./ReUsable/Wrapper";

export default function UseRef() {
  return (
    <Wrapper title="UseRef">
      <p>
        {" "}
        <Highlight>useRef</Highlight> gives you a way to hold a mutable value
        that:{" "}
      </p>
      <div>
        <ul className="list-disc pl-5">
          <li>
            Persists between renders (doesn’t reset when the component
            re-renders)
          </li>
          <li>Does not cause re-renders when changed</li>
          <li>Can be used to directly reference DOM elements</li>
        </ul>
      </div>
      <p>It’s like a hidden box where you can store something,</p>
      <p>and React won’t care or re-render because of it.</p>
      <p className="font-bold ">Common uses</p>
      <p>Access DOM elements(like focusing on input)</p>
      <p>store Timer IDs or previous values</p>
      <p>store data that changes but shouldn't trigger UI or render</p>
      <p>Syntax</p>
      <Code>
        <pre>
          {`import { useRef } from "react";
      
const refName = useRef(initialValue);
      `}
        </pre>
      </Code>
      <div>
        <ul className="list-disc pl-5">
          <li>
            refName.current gives you the stored value (or reference DOM
            element)
          </li>
          <li>Stays the same between renders</li>
        </ul>
      </div>
      <BackToHome />
    </Wrapper>
  );
}
