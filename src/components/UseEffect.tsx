import BackToHome from "./ReUsable/BackToHome";
import Code from "./ReUsable/Code";
import Highlight from "./ReUsable/HighLight";
import Wrapper from "./ReUsable/Wrapper";

export default function UseEffect() {
  return (
    <Wrapper title={"UseEffect"}>
      <p className="font-bold">What is UseEffect?</p>
      <p>
        {" "}
        <Highlight>useEffect</Highlight> is a React hook for handling the side
        effects in function components
      </p>
      <p>
        A <Highlight>Side Effect</Highlight> is anything that affects something
        outside the React's rendering cycle.
      </p>
      <p className="font-bold">Examples of Side Effects</p>
      <div>
        <ul className="list-disc pl-5">
          <li>Fetching Data from an API.</li>
          <li>Reading/Writing from localStorage</li>
          <li>
            Subscribing/Unsubscribing to the WebSocket or event listeners.
          </li>
          <li>Using SetTimeout/SetInterval.</li>
        </ul>
      </div>
      <p>Syntax</p>
      <Code>
        {`useEffect(() => {
     code to run (effect)
  return () => {
     optional Cleanup
  }
}, [dependencies])`}
      </Code>
      <p>Effect function → runs after react renders the components</p>
      <p>Dependencies array → controls when the effect runs.</p>
      <p>
        Cleanup function(Optional) → runs before the effect re-runs or when the
        component mounts
      </p>
      <BackToHome />
    </Wrapper>
  );
}
