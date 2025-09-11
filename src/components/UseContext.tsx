import Highlight from "./ReUsable/HighLight";
import Wrapper from "./ReUsable/Wrapper";

export default function UseContext() {
  return (
    <Wrapper title={"UseContext"}>
      <p>React apps often needs to share data across multiple components</p>
      <p>like the user info,theme,language,jwt token.</p>
      <p>Normally we would pass props down manually(prop drilling),</p>
      <p>but this becomes painful if the data is needed deep in the tree.</p>
      <p>
        {" "}
        <Highlight>UseContext</Highlight> solves this by creating a shared
        context that any component can access
      </p>
      <p> directly, without passing the props through every layer.</p>

      <p className="font-bold">Context API is a way to create global state that any component</p>
      <p className="font-bold">can read without prop drilling.</p>
      <p className="font-bold ">
        useContext is the hook that allows functional components to consume that
        context.
      </p>
      <div>
        <ul className="list-decimal pl-5">
            <li>createContext() – Creates the context object.</li>
            <li>Context.Provider – Wraps part of the component tree to provide a value.</li>
            <li>useContext(context) – Lets any child read that value.</li>
        </ul>
      </div>
      <p className="font-bold">Analogy</p>
      <p>Imagine a public announcement in the school </p>
      <p>where principal shares the information to every teacher then,</p>
      <p>teacher shares the information to every student.</p>
      <p>Instead, principal announces the information once on the mic,</p>
      <p>and everyone hears the message.</p>
      <div className="flex flex-col gap-1.5">
        <p>
          <Highlight>Context</Highlight> = Mic(shared channel)
        </p>
        <p>
          <Highlight>Provider</Highlight> = Principal(the one passing/giving the
          data)
        </p>
        <p>
          <Highlight>Consumer</Highlight> = Student(the one using the data)
        </p>
      </div>
    </Wrapper>
  );
}
