import Code from "./ReUsable/Code";
import Wrapper from "./ReUsable/Wrapper";

export default function Components() {
  return (
    <Wrapper title="Components">
      <p>In React, everything is built using components.</p>
      <p className="mt-2">
        A <span className="font-bold ">Component</span> is a reusable block of
        UI.
      </p>
      <p>You can write components as a function or classes (old method)</p>
      
        <Code>

        export function Welcome(props) {"{"}
        <p>return return &lt;h1 &gt;Hello, {"props.name"}!&lt;/h1 &gt;</p>
        <p>{"}"}</p>
        <p>
          const root = ReactDOM.createRoot(document.getElementById("root"));
        </p>
        <p>root.render( &lt; Welcome name="Savior" /&gt; );</p>
        </Code>
      

      <div className="mt-2">
        <p>
          {" "}
          <span className="font-bold">Welcome</span> is a component
        </p>
        <p>
          {" "}
          <span className="font-bold">Props</span> a shortform for properties,
          like arguments to a function
        </p>
        <p>
          ✅ <span className="font-bold">Props</span> lets you pass data into
          components.
        </p>
      </div>
      <div className="mt-2 ">
        <p className="font-bold mb-2">Example</p>
        <p>Think of a component like a coffee machine ☕.</p>
        <div className="">
          <ul className="list-disc pl-5">
            <li>The machine = component.</li>
            <li>
              The ingredients you give (sugar, milk, coffee type) = props.
            </li>
            <li>The output (your coffee) changes depending on the props.</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}
