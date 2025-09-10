import Code from "./ReUsable/Code";
import Wrapper from "./ReUsable/Wrapper";

export default function ConditionalRendering(){
    return <Wrapper title={"Conditional Rendering"}>
<p className="">
        React lets you render different UI based on conditions (like if or
        ternary operator).{" "}
      </p>
      <p className="font-bold">Example:- Login Button</p>
      <p>✅ If isLoggedIn = true → shows Logout.</p>
      <p>✅ If isLoggedIn = false → shows Login.</p>
      <Code>
        <p>
          function LoginButton({"{"} isLoggedIn {"}"}) {"{"}
        </p>
        <p>return (</p>
        <p> &lt;div&gt; </p>
        <p>
          {"{"} isLoggedIn ? &lt;button&gt; Logout &lt; /button&gt; :
          &lt;button&gt; Login &lt; /button&gt; {"}"}
        </p>
        <p> &lt;/div&gt; </p>
        <p>);</p>
        <p>{"}"}</p>
      </Code>
    </Wrapper>
}