import { Link } from 'react-router-dom';

import spaceMotorsLogo from '../../assets/spaceMotorsLogo.png';
import spaceMotorsPicture from '../../assets/spaceMotorsPicture.png';
import { HeaderStyles } from './styles';

const Header: React.FC = () => {
  return (
    <header>
      <HeaderStyles>
        <div className="container">
          <Link to="/">
            <img className="my-3 sm-logo" src={spaceMotorsLogo} alt="logo" />
          </Link>
        </div>
      </HeaderStyles>
      <div>
        <img className="w-100" src={spaceMotorsPicture} alt="nave" />
      </div>
    </header>
  );
};

export default Header;
