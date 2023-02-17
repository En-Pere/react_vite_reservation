import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Formulario from "./Components/Formulario/Formulario";
import Horario from "./Components/Horario/Horario";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="booking-title">RESERVA UNA MESA</div>
      <div className="App">
        <Horario />
        <Formulario />
      </div>
    </>
  );
}

export default App;
