import { Route, Routes } from "react-router-dom";

import ReactMain from "./React";
import JSXRendering from "./JSXnRendering";
import ListnKeys from "./ListsnKeys";
import Components from "./Components";
import UseState from "./UseState";
import HandlingEvent from "./EventHandling";
import ConditionalRendering from "./ConditionalRendering";
import ControlledVsUnControlled from "./ControlledvsUncontrolled";
import UseEffect from "./UseEffect";
import UseEffectCases from "./UseEffectCases";
import UseContext from "./UseContext";
import UseContextSyntax from "./UseContextSyntax";
import UseReducer from "./UseReducer";
import UseRef from "./UseRef";
import UseMemo from "./UseMemo";
import UseCallback from "./UseCallback";
import ReactMemo from "./ReactMemo";
import ReactLazy from "./ReactLazy";
import ReactRouting from "./ReactRouting";
import Authentication from "./Authentication";
import IntegratingAPI from "./IntegratingAPIs";
import BuildingDeploying from "./BuildingDeploying";
import Home from "./Home";

export default function MyRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
      <Route path="/react" element={<ReactMain />} />
      <Route path="/jsx-rendering" element={<JSXRendering />} />
      <Route path="/list-keys" element={<ListnKeys />} />
      <Route path="/components" element={<Components />} />
      <Route path="/useState" element={<UseState />} />
      <Route path="/handlingEvent" element={<HandlingEvent />} />
      <Route path="/conditionalRendering" element={<ConditionalRendering />} />
      <Route
        path="/controlledVsUnControlled"
        element={<ControlledVsUnControlled />}
      />
      <Route path="/useEffect" element={<UseEffect />} />
      <Route path="/useEffectCases" element={<UseEffectCases />} />
      <Route path="/useContext" element={<UseContext />} />
      <Route path="/useContextSyntax" element={<UseContextSyntax />} />
      <Route path="/useReducer" element={<UseReducer />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/useCallback" element={<UseCallback />} />
      <Route path="/reactMemo" element={<ReactMemo />} />
      <Route path="/reactLazy" element={<ReactLazy />} />
      <Route path="/reactRouting" element={<ReactRouting />} />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="/integratingAPI" element={<IntegratingAPI />} />
      <Route path="/buildingDeploying" element={<BuildingDeploying />} />
    </Routes>
  );
}
