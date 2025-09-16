import React, { useState } from "react";
import Wrapper from "./ReUsable/Wrapper";
import Code from "./ReUsable/Code";
import Highlight from "./ReUsable/HighLight";
import BackToHome from "./ReUsable/BackToHome";

const Child1 = React.memo(function Children({ count }: { count: number }) {
  console.log("React memo child render");
  return <p>{count}</p>;
});
const Child2 = function Children({ count }: { count: number }) {
  console.log("normal child render");
  return <p>{count}</p>;
};
export default function ReactMemo() {
  const [count, setCount] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  return (
    <Wrapper title={"React.Memo"}>
      {/* <p> is used to optimize the component</p> */}
      <p>
        <Highlight>React.memo()</Highlight> Wraps a component so it only
        re-renders when its props change.
      </p>
      <p>Useful for pure functional components (same input → same output).</p>
      <br />
      <p>
        This Component is wrapped inside <Highlight>React.memo()</Highlight>{" "}
      </p>
      <Code>
        <div className="text-center">
          <Child1 count={count} />
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 cursor-pointer bg-white rounded-md text-black"
            >
              +
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="px-4 py-2 cursor-pointer bg-white rounded-md text-black"
            >
              -
            </button>
          </div>
        </div>
      </Code>
      <p>This is a Normal component</p>
      <Code>
        <div className="text-center">
          <Child2 count={c} />
          {}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setC(c + 1)}
              className="px-4 py-2 cursor-pointer bg-white rounded-md text-black"
            >
              +
            </button>
            <button
              onClick={() => setC(c - 1)}
              className="px-4 py-2 cursor-pointer bg-white rounded-md text-black "
            >
              -
            </button>
          </div>
        </div>
      </Code>
      <Code>
        <p>Open the console and see the logs what it shows</p>
      </Code>
      <p>Click on the buttons and See what happens and observe</p>
      <p className="font-bold">
        Clicking Other will re-render the parent but not the child (React.memo
        prevents it).
      </p>
      <p>To use React.memo() effectively,</p>
      <p>also use useCallback and useMemo to keep prop references stable.</p>
      <BackToHome />
    </Wrapper>
  );
}
