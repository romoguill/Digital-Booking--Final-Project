import './NotFound.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadCry } from '@fortawesome/free-solid-svg-icons';

function NotFound() {
  return (
    <div className="container-page center-content not-found">
      <FontAwesomeIcon className="icon-404" icon={faFaceSadCry} />
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__title">Lo sentimos, esta pagina no existe</h2>
    </div>
  );
}

export default NotFound;
