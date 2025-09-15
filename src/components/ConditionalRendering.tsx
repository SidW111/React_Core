import BackToHome from "./ReUsable/BackToHome";
import Code from "./ReUsable/Code";
import Wrapper from "./ReUsable/Wrapper";

export default function ConditionalRendering() {
  return (
    <Wrapper title={"Conditional Rendering"}>
      <p className="">
        React lets you render different UI based on conditions (like if or
        ternary operator).{" "}
      </p>
      <p className="font-bold">Example:- Login Button</p>
      <p>✅ If isLoggedIn = true → shows Logout.</p>
      <p>✅ If isLoggedIn = false → shows Login.</p>
      <Code>
        <pre>
          {`function LoginButton({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <button>Logout</button>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
}`}
        </pre>
      </Code>
      <BackToHome />
    </Wrapper>
  );
}
