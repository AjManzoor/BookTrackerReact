import React, { useState } from 'react';
import Modal from './layout/Modal';

function AddBookModal(){

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    return (
      <div className="App">
        <button onClick={openModal}>Open Modal</button>
  
        <Modal show={showModal} onClose={closeModal}>
          <h2>Modal Title</h2>
          <p>This is the content inside the modal.</p>
        </Modal>
      </div>
    );
}

export default AddBookModal;