import Code from "./ReUsable/Code";
import Highlight from "./ReUsable/HighLight";
import Wrapper from "./ReUsable/Wrapper";

export default function JSXRendering() {
  return (
    <Wrapper title="JSX and Rendering Elements">
      <p className="font-bold text-2xl pb-2">JSX</p>
      <p className="mb-2 font-bold">
        JSX (Javascript XML) is a special syntax react uses to describe the UI.
      </p>
      <p>
        It looks like the html but its actually{" "}
        <span className="font-bold">Javascript</span> under the hood.
      </p>
      <div className="mt-2 flex flex-col gap-1">
        <p className="font-bold">Lets see with an example :-</p>
        <Code>const element = &lt;h1&gt; Hello, Everyone! &lt;/ h1&gt;;</Code>
        <p className="font-bold">
          Behind the scenes, React converts this things into{" "}
        </p>

        <Code>
          const element = React.createElement("h1", null, "Hello, Everyone!");
        </Code>

        <p>JSX = HTML-like syntax inside JS, easier to understand.</p>
      </div>
      <div className="font-semibold">
        <p className="font-bold text-2xl pb-2 pt-2">Rendering</p>
        <p>
          React uses <Highlight>React.createRoot()</Highlight> and{" "}
          <Highlight>root.render()</Highlight>.
        </p>

        <Code>
          import React from "react";
          <p>import ReactDOM from "react-dom/client";</p>
          <p>const element = &lt;h1&gt; Hello, React! &lt;/ h1&gt;;</p>
          const root = ReactDOM.createRoot(document.getElementById("root"));
          <br />
          root.render(element);
        </Code>
      </div>
    </Wrapper>
  );
}
