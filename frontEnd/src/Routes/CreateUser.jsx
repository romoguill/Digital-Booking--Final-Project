import React from 'react';

import '../Routes/CreateUser.scss';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import MenuDrawerMobile from '../Components/MenuDrawerMobile/MenuDrawerMobile';
import CreateUserForm from '../Components/Form/CreateUserForm';

const CreateUser = ({ menuDrawerVisible, setMenuDrawerVisible }) => {
  return (
    <>
      {menuDrawerVisible && (
        <MenuDrawerMobile setMenuDrawerVisible={setMenuDrawerVisible} />
      )}
      <div className="container-page">
        <CreateUserForm />
        <Footer />
      </div>
    </>
  );
};

export default CreateUser;
