import { useForm } from '../../Hooks/useForm';

const initialForm = {
  email: '',
  password: '',
};

const validationsForm = (form) => {};

function FormTemplate() {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Ingrese su mail"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          className="input-form"
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="Ingrese su contraseña"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.password}
          className="input-form"
        />
      </div>
    </form>
  );
}

export default FormTemplate;
