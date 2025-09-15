import { Link } from "react-router-dom";
import Wrapper from "./ReUsable/Wrapper";

export default function Home() {
  return (
    <Wrapper title="Home">
      <div className="grid grid-cols-2 gap-4 pt-4">
        <div className="flex flex-col">
          <Link className="hover:underline" to="/react">
            React
          </Link>
          <Link className="hover:underline" to="/jsx-rendering">
            JSX & Rendering
          </Link>
          <Link className="hover:underline" to="/list-keys">
            List & keys
          </Link>
          <Link className="hover:underline" to="/components">
            Components
          </Link>
          <Link className="hover:underline" to="/useState">
            useState
          </Link>
          <Link className="hover:underline" to="/handlingEvent">
            Handling Event
          </Link>
          <Link className="hover:underline" to="/conditionalRendering">
            Conditional Rendering
          </Link>
          <Link className="hover:underline" to="/controlledVsUnControlled">
            Controlled Vs UnControlled
          </Link>
          <Link className="hover:underline" to="/useEffect">
            useEffect
          </Link>
          <Link className="hover:underline" to="/useEffectCases">
            useEffectCases
          </Link>
          <Link className="hover:underline" to="/useContext">
            useContext
          </Link>
        </div>
        <div className="flex flex-col">
          <Link className="hover:underline" to="/useContextSyntax">
            useContextSyntax
          </Link>
          <Link className="hover:underline" to="/useReducer">
            useReducer
          </Link>
          <Link className="hover:underline" to="/useRef">
            useRef
          </Link>
          <Link className="hover:underline" to="/useMemo">
            useMemo
          </Link>
          <Link className="hover:underline" to="/useCallback">
            useCallback
          </Link>
          <Link className="hover:underline" to="/reactMemo">
            React.Memo
          </Link>
          <Link className="hover:underline" to="/reactLazy">
            React.Lazy
          </Link>
          <Link className="hover:underline" to="/reactRouting">
            React Routing
          </Link>
          <Link className="hover:underline" to="/authentication">
            Authentication
          </Link>
          <Link className="hover:underline" to="/integratingAPI">
            Integrating API
          </Link>
          <Link className="hover:underline" to="/buildingDeploying">
            Building & Deploying
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
