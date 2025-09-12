import Code from "./ReUsable/Code";
import Highlight from "./ReUsable/HighLight";
import Wrapper from "./ReUsable/Wrapper";

export default function UseMemo(){
    return <Wrapper title={"useMemo"}>
        <p><Highlight>useMemo</Highlight> is a hook that helps optimize performance by caching the</p>
        <p>result of expensive calculation</p>
        <p>It only recomputes when its dependencies change</p>
        <p>otherwise, it returns the cached value from last render.</p>
        <p className="font-bold">Analogy</p>
        <p>Imagine you solve a very hard math problem 🧮</p>
        <p>and write the answer on a sticky note.</p>
        <p>Next time someone asks, you just read the sticky note</p>
        <p>unless the numbers changed, then you solve again.</p>
        <p>That’s what <Highlight>useMemo</Highlight> does: memoizes (remembers) expensive results.</p>
        <p>💡 When to Use</p>
        <div>
            <ul className="list-disc pl-5">
                <li>Heavy calculations or expensive loops</li>
                <li>Derived data from props or state</li>
                <li>To prevent unnecessary recalculation on every render</li>
            </ul>
        </div>
        <Code>
            <pre>
                {`import { useMemo } from "react";

const memoizedValue = useMemo(() => {
  // expensive calculation
  return result;
}, [dependency1, dependency2]);

`}
            </pre>
        </Code>
        
    </Wrapper>
}