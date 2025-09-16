import BackToHome from "./ReUsable/BackToHome";
import Code from "./ReUsable/Code";
import Wrapper from "./ReUsable/Wrapper";

export default function UseContextSyntax() {
  return (
    <Wrapper title={"UseContext Syntax"}>
      <Code>
        

          {`import React, { createContext, useContext } from "react";

const ThemeContext = createContext("light"); // create context

function App() {
  return (
    <ThemeContext.Provider value="dark"> // context provider
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <Button />;
}

function Button() {
  const theme = useContext(ThemeContext); // access context directly
  return <button>{theme === "dark" ? "Dark Mode" : "Light Mode"}</button>;
}
`}
       
      </Code>
      <BackToHome />
    </Wrapper>
  );
}
