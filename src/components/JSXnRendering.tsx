export default function JSXRendering() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl text-center p-2">
        JSX and Rendering elements
      </h1>
      <div className="font-semibold tracking-tight">
        <div className="p-2">
          <p className="font-bold text-2xl pb-2">JSX</p>
          <p className="mb-2 font-bold">
            JSX (Javascript XML) is a special syntax react uses to describe the
            UI.
          </p>
          <p>
            It looks like the html but its actually{" "}
            <span className="font-bold">Javascript</span> under the hood.
          </p>
          <div className="mt-2 flex flex-col gap-1">
            <p className="font-bold">Lets see with an example :-</p>
            <p className="bg-gray-800 text-white p-2 rounded-xl ">
              const element = &lt;h1&gt; Hello, Everyone! &lt;/ h1&gt;;
            </p>
            <p className="font-bold">
              Behind the scenes, React converts this things into{" "}
            </p>
            <p className="bg-gray-800 text-white p-2 rounded-xl ">
              const element = React.createElement("h1", null, "Hello,
              Everyone!");
            </p>
            <p>JSX = HTML-like syntax inside JS, easier to understand.</p>
          </div>
          <div className="font-semibold">
            <p className="font-bold text-2xl pb-2 pt-2">Rendering</p>
            <p>
              React uses{" "}
              <span className="py-1 rounded-md px-2 bg-gray-200">
                {" "}
                React.createRoot()
              </span>{" "}
              and{" "}
              <span className="py-1 rounded-md px-2 bg-gray-200">
                root.render()
              </span>
              .
            </p>
            <p className="bg-gray-800 text-white p-3 rounded-xl mt-2">
              import React from "react";
              <p>import ReactDOM from "react-dom/client";</p>
              <p>const element = &lt;h1&gt; Hello, React! &lt;/ h1&gt;;</p>
              const root = ReactDOM.createRoot(document.getElementById("root"));
              <br />
              root.render(element);
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
