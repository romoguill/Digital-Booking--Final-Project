import { useForm } from 'react-hook-form';

function UserLoginForm() {
  // TODO : Modificar validacion de formulario cuando tengamos el backend de Autenticacion
  const fakeCredentials = {
    email: 'john@gmail.com',
    name: 'John',
    lastName: 'Doe',
    password: '123456',
  };

  // TODO : Utilizar una llamada adecuada cuando tengamos el backend
  const fakeCallAPI = (formData) => {
    return new Promise((resolve) => {
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

  // const validationsForm = (formData) => {
  //   let errors = {};

  //   if (!isValidEmail(formData.email)) {
  //     errors.email = 'Email inválido';
  //   }

  //   return errors;
  // };

  // TODO : Customizar accion a realizar cuando la respuesta de backend es 200
  const callbackSubmit = async (formData) => {
    const response = await fakeCallAPI(formData);
    return response.validCrentials;
  };

  // useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ mode: 'onBlur' });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          {...register('email', {
            required: 'Campo requerido',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Email inválido',
            },
          })}
        />
        {errors.email && (
          <p className="input-error-msg">{errors.email.message}</p>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="password">Contraseña</label>
        <input {...register('password', { required: 'Campo requerido' })} />
        {errors.password && (
          <p className="input-error-msg">{errors.password.message}</p>
        )}
      </div>

      {/* {errors.submit && (
        <div className="wrapper-error">
          <p className="input-error-msg error-form">{errors.submit}</p>
        </div>
      )} */}
      <button className="button-primary button-primary--full">Ingresar</button>
    </form>
  );
}

export default UserLoginForm;
