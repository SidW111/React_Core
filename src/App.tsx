import "./App.css";
import Components from "./components/Components";
import JSXRendering from "./components/JSXnRendering";
import ListnKeys from "./components/ListsnKeys";
import ReactMain from "./components/React";
import UseState from "./components/UseState";
import HandlingEvent from "./components/EventHandling";
import ConditionalRendering from "./components/ConditionalRendering";
import ControlledVsUnControlled from "./components/ControlledvsUncontrolled";

function App() {
  return (
    <div>
      <ReactMain />
      <JSXRendering />
      <Components />
      <UseState />
      <HandlingEvent/>
      <ConditionalRendering/>
      <ListnKeys/>
      <ControlledVsUnControlled/>
    </div>
  );
}

export default App;
