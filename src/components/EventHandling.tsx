import Code from "./ReUsable/Code";
import Highlight from "./ReUsable/HighLight";
import Wrapper from "./ReUsable/Wrapper";

export default function HandlingEvent() {
  return (
    <Wrapper title="Handling Events">
      {/* <p className="text-2xl font-bold">Handling Events</p> */}
      <p>React handles almost everything like HTML, but with few changes</p>
      <p>
        Events are written in camelCase ( <Highlight>onClick</Highlight>,
        <Highlight>onChange</Highlight> ).
      </p>
      <p>Instead of Strings, you pass a function.</p>
      <p className="font-bold">Example</p>
      <Code>
  <pre>
{`function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}`}
  </pre>
</Code>

      <p className="font-bold">In HTML</p>
      <Code>
  <pre>
{`<button onClick={handleClick}>
  Click Me
</button>`}
  </pre>
</Code>

      <p>
        React Uses JS <span className="font-bold">functions</span> not strings
      </p>
    </Wrapper>
  );
}
