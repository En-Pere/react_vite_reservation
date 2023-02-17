import React from "react";
import { useForm } from "react-hook-form";
import "./Formulario.css";

function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre Completo</label>
      <input
        type="text"
        {...register("firstname", { required: true, maxLength: 80 })}
      />
      <label>Email</label>
      <input
        type="text"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <label>Teléfono</label>
      <input
        type="tel"
        {...register("number", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />
      <label>Personas</label>
      <select {...register("people", { required: true })}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">5</option>
        <option value="5">6</option>
        <option value="6">7</option>
        <option value="7">8</option>
        <option value="+8">+ de 8</option>
      </select>
      <label>Fecha</label>
      <input
        type="date"
        placeholder="fecha"
        {...register("date", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />

      <label>Horario Reserva</label>
      <select {...register("hour", { required: true })}>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
        <option value="16:00">16:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
        <option value="22:00">22:00</option>
      </select>
      <span>
        <input type="submit" id="submit-button" />
      </span>
    </form>
  );
}

export default Formulario;