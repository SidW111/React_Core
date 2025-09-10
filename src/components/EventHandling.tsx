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
        <p>function Button() {"{"}</p>
        <p>function handleClick() {"{"}</p>
        <p> alert("Button clicked!");</p>
        <p>{"}"}</p>

        <p>
          return &lt;button{" "}
          <span className="bg-green-600 text-center rounded-md  px-0.5 py-0.5 text-white">
            onClick= {"{"} handleClick {"}"}
          </span>{" "}
          &gt; Click Me &lt;/button&gt;
        </p>
        <p>{"}"}</p>
      </Code>
      <p className="font-bold">In HTML</p>
      <Code>
        &lt;button{"  "}
        <span className="bg-green-600 text-center rounded-md  px-0.5 py-0.5 text-white">
          onClick="handleClick()"
        </span>{" "}
        &gt; Click Me &lt; /button&gt;;
      </Code>
      <p>
        React Uses JS <span className="font-bold">functions</span> not strings
      </p>
    </Wrapper>
  );
}
