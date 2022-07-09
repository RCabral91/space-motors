import { Link } from 'react-router-dom';

import spaceMotorsLogo from '../../assets/spaceMotorsLogo.png';
import { FooterStyles } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterStyles>
      <div className="container d-flex justify-content-center">
        <Link to="/">
          <img className="my-4 sm-logo" src={spaceMotorsLogo} alt="logo" />
        </Link>
      </div>
    </FooterStyles>
  );
};

export default Footer;
