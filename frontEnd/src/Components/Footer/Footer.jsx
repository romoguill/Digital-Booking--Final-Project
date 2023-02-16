import './Footer.scss';

import facebookLogo from '../../assets/socialMedia/facebook.png';
import instagramLogo from '../../assets/socialMedia/instagram.png';
import linkedinLogo from '../../assets/socialMedia/linkedin.png';
import twitterLogo from '../../assets/socialMedia/twitter.png';

function Footer() {
  return (
    <footer>
      <div className="container-main">
        <h3>Logo</h3>
        <div className="container__social-media">
          <a href="#">
            <img src={facebookLogo} />
          </a>
          <a href="#">
            <img src={instagramLogo} />
          </a>
          <a href="#">
            <img src={linkedinLogo} />
          </a>
          <a href="#">
            <img src={twitterLogo} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
