import { Link } from 'react-router-dom';

import spaceMotorsLogo from '../../assets/spaceMotorsLogo.png';
import { HeaderStyles } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <Link to="/">
          <img className="my-3 sm-logo" src={spaceMotorsLogo} alt="logo" />
        </Link>
      </div>
    </HeaderStyles>
  );
};

export default Header;
