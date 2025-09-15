import BackToHome from "./ReUsable/BackToHome";
import Code from "./ReUsable/Code";
import Highlight from "./ReUsable/HighLight";
import Wrapper from "./ReUsable/Wrapper";

export default function UseCallback() {
  return (
    <Wrapper title="useCallback">
      <p className="font-bold">
        A React Hook that memoizes (caches) a function
      </p>
      <p>
        <Highlight>useCallback</Highlight> is used to memoize functions. Meaning
        it returns the{" "}
      </p>
      <p>
        same function reference between renders unless its dependencies change.
      </p>
      <Code>
        <pre>{`const memoizedFn = useCallback(fn, [deps]);`}</pre>
      </Code>
      <div>
        <ul className="list-disc pl-5">
          <li>On first render → memoizedFn = fn</li>
          <li>
            On next renders → if [deps] didn’t change, return the same function
            reference
          </li>
          <li>If [deps] changed, recreate the function</li>
        </ul>
      </div>
      <p className="font-bold">It returns the reference to the function.</p>
      <BackToHome />
    </Wrapper>
  );
}
