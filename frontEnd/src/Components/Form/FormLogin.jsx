import { useForm } from '../../Hooks/useForm';
import { isValidEmail } from '../../utils/validationForm';

// TODO : Modificar validacion de formulario cuando tengamos el backend de Autenticacion
const fakeCredentials = {
  email: 'john@gmail.com',
  name: 'John',
  lastName: 'Doe',
  password: '123456',
};

// TODO : Utilizar una llamada adecuada cuando tengamos el backend
const fakeCallAPI = (formData) => {
  return new Promise((resolve, reject) => {
    if (
      formData.email === fakeCredentials.email &&
      formData.password === fakeCredentials.password
    ) {
      resolve({ validCrentials: true });
    } else {
      resolve({ validCrentials: false });
    }
  });
};

const initialFormData = {
  email: '',
  password: '',
};

const validationsForm = (formData) => {
  let errors = {};

  if (!isValidEmail(formData.email)) {
    errors.email = 'Email inválido';
  }

  return errors;
};

// TODO : Customizar accion a realizar cuando la respuesta de backend es 200
const callbackSubmit = async (formData) => {
  const response = await fakeCallAPI(formData);
  return response.validCrentials;
};

function FormLogin({ errorMsgOnSubmit }) {
  const { formData, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialFormData,
    validationsForm,
    errorMsgOnSubmit,
    callbackSubmit
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

      {errors.submit && (
        <div className="wrapper-error">
          <p className="input-error-msg error-form">{errors.submit}</p>
        </div>
      )}

      <button
        className="button-primary button-primary--full"
        onClick={handleSubmit}
      >
        Ingresar
      </button>
    </form>
  );
}

export default FormLogin;
