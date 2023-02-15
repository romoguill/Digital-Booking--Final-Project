import facebookLogo from '../../assets/socialMedia/facebook.png';
import instagramLogo from '../../assets/socialMedia/instagram.png';
import linkedinLogo from '../../assets/socialMedia/linkedin.png';
import twitterLogo from '../../assets/socialMedia/twitter.png';

function SocialMedia() {
  return (
    <div>
      <a href="www.facebook.com">
        <img src={facebookLogo} />
      </a>
      <a href="www.instagram.com">
        <img src={instagramLogo} />
      </a>
      <a href="www.linkedin.com">
        <img src={linkedinLogo} />
      </a>
      <a href="www.twitter.com">
        <img src={twitterLogo} />
      </a>
    </div>
  );
}

export default SocialMedia;
