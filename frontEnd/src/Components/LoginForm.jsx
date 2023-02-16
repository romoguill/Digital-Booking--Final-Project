import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí es donde comprobaríamos si los datos del usuario son correctos
    if (password != localStorage.getItem(password)) {
        alert("Contraseña incorrecta")
    } else {
        alert("Bienvenido " + email);
    console.log(email, password);
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
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default LoginForm;
