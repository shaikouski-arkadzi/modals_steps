import { useContext } from 'react';

import Modal from './shared/Modal.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';

const Cart = () => {
  const userProgressCtx = useContext(UserProgressContext);

  const handleCloseCart= () => {
    userProgressCtx.hideCart();
  }

  const handleGoToCheckout = () => {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === 'cart'}
      onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}
    >
      <p className="modal-actions">
        <button onClick={handleCloseCart}>
          Close
        </button>
        <button onClick={handleGoToCheckout}>
          Go to Checkout
        </button>
      </p>
    </Modal>
  );
};

export default Cart;