import '../Routes/CreateUser.scss';

import MenuDrawerMobile from '../Components/Header/MenuDrawerMobile/MenuDrawerMobile';
import CreateUserForm from '../Components/Form/CreateUserForm';

const CreateUser = ({ menuDrawerVisible, setMenuDrawerVisible }) => {
  return (
    <div className="container-page center-content">
      {menuDrawerVisible && (
        <MenuDrawerMobile setMenuDrawerVisible={setMenuDrawerVisible} />
      )}
      <CreateUserForm />
    </div>
  );
};

export default CreateUser;
