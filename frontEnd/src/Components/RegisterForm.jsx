import React, { useState } from "react";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
    } else {
      const userData = {
        email: email,
        password: password,
      };
      alert("Usuario creado con éxito !");
      // Aquí es donde podríamos enviar los datos del usuario al servidor o almacenarlos en el estado de la aplicación
      console.log(userData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Correo electrónico:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>
      <label>
        Confirmar contraseña:
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
      </label>
      <button type="submit">Registrar</button>
    </form>
  );
}

export default RegisterForm;
