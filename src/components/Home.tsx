import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        React Revision Hub
      </h1>
      <div className="grid grid-cols-2 md:gap-6 gap-2 font-semibold">
        <div className="flex flex-col gap-1.5 text-start md:text-left">
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

        <div className="flex flex-col gap-1.5 text-start md:text-left">
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
        {/* <footer className=" py-4 text-sm font-bold text-gray-800">
          Made by Sid with ❤️
        </footer> */}
      </div>
    </div>
  );
}
