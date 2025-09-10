import Code from "./ReUsable/Code";
import Wrapper from "./ReUsable/Wrapper";

export default function HandlingEventsnConditional() {
  return (
    <Wrapper title="Handling Events & Conditional Rendering">
      <p>React handles almost everything like HTML, but with few changes</p>
      <p>Events are written in camelCase ( onClick, onChange ).</p>
      <p>Instead of Strings, you pass a function.</p>
      <p className="font-bold">Example</p>
      <Code>
        <p>function Button() {"{"}</p>
        <p>function handleClick() {"{"}</p>
        <p> alert("Button clicked!");</p>
        <p>{"}"}</p>

        <p>
          return &lt;button onClick= {"{"} handleClick {"}"} &gt; Click Me
          &lt;/button&gt;
        </p>
        <p>{"}"}</p>
      </Code>
    </Wrapper>
  );
}
