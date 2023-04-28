import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, useRoutes } from "react-router-dom";
import Rotas from "./route";
function App() {
  const [count, setCount] = useState(0);  

  useRoutes(Rotas);
  

  return (
     <div>
      <Rotas/>
     </div>
  );
}

export default App;
