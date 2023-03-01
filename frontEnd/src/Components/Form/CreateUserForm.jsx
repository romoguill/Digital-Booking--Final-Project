import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import './MainForm.scss';
import { useState } from 'react';

function CreateUserForm() {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);

  function handleShowPassword() {
    setPasswordVisible(!passwordVisible);
  }

  // TODO : Utilizar una llamada adecuada cuando tengamos el backend
  const fakeCallAPI = (formData) => {
    return new Promise((resolve, reject) => {
      if (formData.email === 'errorservidor@gmail.com') {
        reject();
      } else {
        resolve({ ok: true });
      }
    });
  };

  // TODO : Customizar accion a realizar cuando la respuesta de backend es 200
  const onSubmit = async (formData) => {
    const response = await fakeCallAPI(formData);
    if (response.ok) {
      navigate('/');
    }
  };

  // useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm({ mode: 'onBlur' });

  return (
    <form
      className="main-form"
      onSubmit={(e) =>
        handleSubmit(onSubmit)(e).catch(() => {
          setError('root.responseError', {
            type: 'custom',
            message: 'Error en el servidor. Intente más tarde.',
          });
        })
      }
    >
      <div className="group__name-lastName">
        <div className="form-control">
          <label htmlFor="name">Nombre</label>
          <input
            {...register('name', {
              required: 'Campo requerido',
              pattern: {
                value:
                  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
                message: 'Nombre inválido',
              },
            })}
          />

          {errors.name && (
            <p className="input-error-msg">{errors.name.message}</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="lastName">Apellido</label>
          <input
            {...register('lastName', {
              required: 'Campo requerido',
              pattern: {
                value:
                  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
                message: 'Apellido inválido',
              },
            })}
          />

          {errors.lastName && (
            <p className="input-error-msg">{errors.lastName.message}</p>
          )}
        </div>
      </div>

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
        <div className="password-wrapper">
          <input
            type={!passwordVisible ? 'password' : 'text'}
            {...register('password', { required: 'Campo requerido' })}
          />
          <FontAwesomeIcon
            className="show-password-icon"
            icon={!passwordVisible ? faEye : faEyeSlash}
            onClick={handleShowPassword}
          />
        </div>

        {errors.password && (
          <p className="input-error-msg">{errors.password.message}</p>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="passwordConfirm">Confirmar contraseña</label>
        <input
          type={!passwordVisible ? 'password' : 'text'}
          {...register('passwordConfirm', {
            required: 'Campo requerido',
            validate: (confirmation) =>
              watch('password') === confirmation ||
              'Las contraseñas no coinciden',
          })}
        />

        {errors.passwordConfirm && (
          <p className="input-error-msg">{errors.passwordConfirm.message}</p>
        )}
      </div>

      {errors?.root?.responseError && (
        <div className="wrapper-error">
          <p className="input-error-msg error-form">
            {errors.root.responseError.message}
          </p>
        </div>
      )}

      <button className="button-primary button-primary--full">
        Crear cuenta
      </button>

      <p>
        ¿Ya tienes una cuenta?
        <span>
          <Link className="small-link" to="/login">
            Iniciar sesión
          </Link>
        </span>
      </p>
    </form>
  );
}

export default CreateUserForm;
