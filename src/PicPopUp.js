import React, { useState } from 'react';
import Modal from 'react-modal';
import pic from './pic.jpg'

Modal.setAppElement('#root'); // Set the root element for accessibility

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Image</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Image Modal"
      >
        <img
          src={pic}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};

export default MyComponent;
