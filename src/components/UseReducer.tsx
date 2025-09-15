import { useReducer } from "react";
import Wrapper from "./ReUsable/Wrapper";
import Highlight from "./ReUsable/HighLight";
import { PiMinus, PiPlus } from "react-icons/pi";
import BackToHome from "./ReUsable/BackToHome";

const initialState = { count: 0 };

function reducer(state: { count: number }, action: { type: string }) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Wrapper title="UseReducer">
      <p>
        <Highlight>UseReducer</Highlight> is an alternative for the{" "}
        <Highlight>useState</Highlight>
      </p>
      <p>for managing the complex or multi-state functionalities.</p>
      <p>It works like a mini state machine:</p>
      <div>
        <ul className="list-disc pl-5">
          <li>You send an action describing what happened.</li>
          <li>
            A reducer function decides how the state should change based on that
            action.
          </li>
        </ul>
      </div>
      <p className="font-bold">Analogy</p>
      <p>Imagine a vending machine:</p>
      <div>
        <ul className="list-disc pl-5">
          <li>You insert coins → it decides new balance</li>
          <li>You press a button → it decides which item to give</li>
        </ul>
      </div>
      <p>
        The logic (how it reacts to actions) lives inside the machine, not in
        your code everywhere.
      </p>
      <div>
        <div className="pt-2 flex justify-center">
          <p>Count: {state.count}</p>
        </div>
        <div className="flex gap-2 items-center justify-center pt-2">
          <button
            className="px-4 py-2 bg-black text-white rounded-md hover:scale-110 transition-all duration-300"
            onClick={() => dispatch({ type: "increment" })}
          >
            <PiPlus />
          </button>
          <button
            className="px-4 py-2 bg-black text-white rounded-md hover:scale-110 transition-all duration-300"
            onClick={() => dispatch({ type: "decrement" })}
          >
            <PiMinus />
          </button>
        </div>
      </div>
      <p className="pt-2">
        <Highlight>dispatch</Highlight> sends actions, and{" "}
        <Highlight>reducer</Highlight> decides how to update the state.
      </p>
      <BackToHome />
    </Wrapper>
  );
}
