function FormInput({ label, name, type, placeholder }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(formData));
  };

  return (
    <div className="form-control">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && <p className="input-error-msg">Email inválido</p>}
    </div>
  );
}

export default FormInput;
