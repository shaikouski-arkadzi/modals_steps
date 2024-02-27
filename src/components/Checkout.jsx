import { useState, useContext } from 'react';

import Modal from './shared/Modal.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';

const Checkout = () => {
  const [data, setData] = useState()
  const userProgressCtx = useContext(UserProgressContext);

  const handleClose = () => {
    userProgressCtx.hideCheckout();
  }

  const handleFinish = () => {
    userProgressCtx.hideCheckout();
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    setData(Object.fromEntries(fd.entries()))
  }

  if (data) {
    return (
      <Modal
        open={userProgressCtx.progress === 'checkout'}
        onClose={handleFinish}
      >
        <h2>Success!</h2>
        <p className="modal-actions">
          <button onClick={handleFinish}>Okay</button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <p className="modal-actions">
          <button type="button" onClick={handleClose}>
            Close
          </button>
          <button>Submit Order</button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;