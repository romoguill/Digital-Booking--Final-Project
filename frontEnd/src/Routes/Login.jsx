import { useForm } from 'react-hook-form';

import Title from '../Components/Login/Title';
import Header from '../Components/Header/Header';
import './Login.scss';
import Footer from '../Components/Footer/Footer';
import MenuDrawerMobile from '../Components/MenuDrawerMobile/MenuDrawerMobile';
import UserLoginForm from '../Components/Form/UserLoginForm';

const Login = ({ menuDrawerVisible, setMenuDrawerVisible }) => {
  // Configuracion del Formulario Login
  const errorMsgOnSubmit =
    'Por favor vuelva a intentarlo, sus credenciales son inválidas';
  const initialFormData = {
    email: '',
    password: '',
  };

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

  const { register } = useForm();

  return (
    <>
      {menuDrawerVisible && (
        <MenuDrawerMobile setMenuDrawerVisible={setMenuDrawerVisible} />
      )}
      <div className="container-page">
        <div className="CreateUserContainer">
          <div className="createUserContent">
            <Header setMenuDrawerVisible={setMenuDrawerVisible} />
            <div className="formCreateUser">
              <Title text={<h1>Iniciar sesión</h1>} />
              <UserLoginForm />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
