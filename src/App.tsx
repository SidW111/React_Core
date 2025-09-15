import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MyRouter from "./components/MyRouter";

function App() {
  return (
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>
  );
}

export default App;
