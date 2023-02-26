function FormLogin() {
  return (
    <>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Ingrese su mail"
          onBlur={handleBlur}
          onChange={handleChange}
          value={formData.email}
          className="input-form"
        />
        {errors.email && <p className="input-error-msg">Email inválido</p>}
      </div>

      <div className="form-control">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="Ingrese su contraseña"
          onBlur={handleBlur}
          onChange={handleChange}
          value={formData.password}
          className="input-form"
        />
      </div>
    </>
  );
}

export default FormLogin;
