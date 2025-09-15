import BackToHome from "./ReUsable/BackToHome";
import Code from "./ReUsable/Code";
import Wrapper from "./ReUsable/Wrapper";

export default function UseEffectCases() {
  return (
    <Wrapper title="UseEffect Cases">
      <p className="font-bold">3 Main Cases of useEffect</p>

      <p>1. Runs after every rerender.</p>
      <Code>
        <pre>
          {`useEffect (()=> {
    console.log("I run after every re-render")    
})`}
        </pre>
      </Code>
      <p>No dependencies array → runs on every render.</p>

      <p>2. Runs once, (on mount).</p>
      <Code>
        <pre>
          {`useEffect (()=> {
    console.log("I run only once, when component mounts.")    
},[])`}
        </pre>
      </Code>
      <p>Empty array [], runs only on first render.</p>

      <p>3. Runs when dependencies array changes.</p>
      <Code>
        <pre>
          {`useEffect (()=> {
    console.log("I run when the state changes")    
    },[state])`}
        </pre>
      </Code>
      <p>Runs when state changes.</p>
      <p className="bg-red-600 text-white px-1 py-1 rounded-xl mt-1">
        Sometimes effects create things that need cleanup (like event listeners
        or timers).
      </p>
      <BackToHome />
    </Wrapper>
  );
}
