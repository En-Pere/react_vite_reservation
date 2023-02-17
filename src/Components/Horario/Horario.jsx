import React from "react";
import "./Horario.css";

function Horario() {
  return (
    <div className="horario-container">
      <div className="horario-name">HORARIO</div>
      <div className="horario-horario">
        <p>Lunes - 13:00 a 23:00</p>
        <p>Martes - 13:00 a 23:00</p>
        <p>Miércoles - 13:00 a 23:00</p>
        <p>Jueves - 13:00 a 23:00</p>
        <p>Viernes - 13:00 a 23:00</p>
        <p>Sábado - 13:00 a 23:00</p>
        <p>Domingo - Cerrado</p>
      </div>
    </div>
  );
}

export default Horario;
