import "./App.css";
import Components from "./components/Components";
import JSXRendering from "./components/JSXnRendering";
import ReactMain from "./components/React";
import UseState from "./components/UseState";

function App() {
  return (
    <div>
      <ReactMain />
      <JSXRendering />
      <Components />
      <UseState />
    </div>
  );
}

export default App;
