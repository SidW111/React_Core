import React, { useState } from "react";
import Wrapper from "./ReUsable/Wrapper";

const Child1  = React.memo(function Children({ count }: { count: number }) {
  console.log("React memo child render");
  return <p>{count}</p>;
});
const Child2 = function Children({ count }: { count: number }) {
  console.log("normal child render");
  return <p>{count}</p>;
}
export default function ReactMemo() {
  const [count, setCount] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  return (
    <Wrapper title={"React.Memo"}>
      <div className="text-center">
        <Child1 count={count} />
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 cursor-pointer bg-black rounded-md text-white"
          >
            +
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 cursor-pointer bg-black rounded-md text-white"
          >
            -
          </button>
        </div>
      </div>
      <div className="text-center">
        <Child2 count={c} />
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setC(c + 1)}
            className="px-4 py-2 cursor-pointer bg-black rounded-md text-white"
          >
            +
          </button>
          <button
            onClick={() => setC(c - 1)}
            className="px-4 py-2 cursor-pointer bg-black rounded-md text-white"
          >
            -
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
