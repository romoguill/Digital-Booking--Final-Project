import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { UserContext } from '../../Contexts/Context';

function UserLoginForm() {
  const navigate = useNavigate();
  const { userAuthInfo, setUserAuthInfo } = useContext(UserContext);

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
      if (formData.email === 'errorservidor@gmail.com') {
        reject();
      } else if (
        formData.email === fakeCredentials.email &&
        formData.password === fakeCredentials.password
      ) {
        resolve({ ok: true });
      } else {
        resolve({ ok: false });
      }
    });
  };

  // TODO : Customizar accion a realizar cuando la respuesta de backend es 200
  const onSubmit = async (formData) => {
    const response = await fakeCallAPI(formData);
    if (response.ok) {
      setUserAuthInfo({
        isLoggedIn: true,
        userInfo: {
          name: fakeCredentials.name,
          lastName: fakeCredentials.lastName,
          email: fakeCredentials.email,
        },
      });
      navigate('/');
    } else {
      setError('root.responseError', {
        type: 'custom',
        message: 'Credenciales inválidas',
      });
    }
  };

  // useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ mode: 'onBlur' });

  return (
    <form
      onSubmit={(e) =>
        handleSubmit(onSubmit)(e).catch(() => {
          setError('root.responseError', {
            type: 'custom',
            message: 'Error en el servidor. Intente más tarde.',
          });
        })
      }
    >
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

      {errors?.root?.responseError && (
        <div className="wrapper-error">
          <p className="input-error-msg error-form">
            {errors.root.responseError.message}
          </p>
        </div>
      )}

      <button className="button-primary button-primary--full">Ingresar</button>
    </form>
  );
}

export default UserLoginForm;
