import '../Routes/CreateUser.scss';

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
      </div>
    </>
  );
};

export default CreateUser;
