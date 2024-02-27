import { useContext } from 'react';

import UserProgressContext from '../store/UserProgressContext.jsx';

const Header = () => {
  const userProgressCtx = useContext(UserProgressContext);

  const handleShowCart = () => {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <nav>
        <button onClick={handleShowCart}>
          Cart
        </button>
      </nav>
    </header>
  );
};

export default Header