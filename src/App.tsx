import "./App.css";
import Components from "./components/Components";
import JSXRendering from "./components/JSXnRendering";
import ListnKeys from "./components/ListsnKeys";
import ReactMain from "./components/React";
import UseState from "./components/UseState";
import HandlingEvent from "./components/EventHandling";
import ConditionalRendering from "./components/ConditionalRendering";
import ControlledVsUnControlled from "./components/ControlledvsUncontrolled";
import UseEffect from "./components/UseEffect";
import UseEffectCases from "./components/UseEffectCases";
import UseContext from "./components/UseContext";
import UseContextSyntax from "./components/UseContextSyntax";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";

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
      <UseEffect/>
      <UseEffectCases/>
      <UseContext/>
      <UseContextSyntax/>
      <UseReducer/>
      <UseRef/>
    </div>
  );
}

export default App;
