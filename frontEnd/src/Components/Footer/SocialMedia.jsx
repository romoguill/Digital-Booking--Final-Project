import facebookLogo from '../../assets/socialMedia/facebook.png';
import instagramLogo from '../../assets/socialMedia/instagram.png';
import linkedinLogo from '../../assets/socialMedia/linkedin.png';
import twitterLogo from '../../assets/socialMedia/twitter.png';

function SocialMedia() {
  return (
    <div>
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
  );
}

export default SocialMedia;
