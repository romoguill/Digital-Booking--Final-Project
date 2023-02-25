import { useForm } from '../../Hooks/useForm';
import { isValidEmail, isValidPassword } from '../../utils/validationForm';

// TODO : Modificar validacion de formulario cuando tengamos el backend de Autenticacion
const fakeCredentials = {
  email: 'john@gmail.com',
  name: 'John',
  lastName: 'Doe',
  password: '123456',
};

const initialFormData = {
  email: '',
  password: '',
};

const validationsForm = (formData) => {
  let errors = {};

  if (
    formData.email != fakeCredentials.email ||
    formData.password != fakeCredentials.password
  ) {
    errors.wrongCredentials = true;
  }

  return errors;
};

function FormLogin() {
  const { formData, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialFormData,
    validationsForm
  );

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
          value={formData.email}
          className="input-form"
        />
        {errors.email && <p className="input-error-msg">{errors.email}</p>}
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
        {errors.password && (
          <p className="input-error-msg">{errors.password}</p>
        )}
      </div>
    </form>
  );
}

export default FormLogin;
