import { Link } from 'react-router-dom';
import logo from '../../assets/Images/app-logo-final.png';

import './Brand.scss';

function Brand() {
  return (
    <div className="app-logo__container">
      <Link to="/">
        <img className="app-logo" src={logo} />
      </Link>
    </div>
  );
}

export default Brand;
