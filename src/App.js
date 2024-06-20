import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import { modalContent } from './components/Modal/modalContent'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <h1>Home Page Heading</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante risus, pulvinar ac dictum id, aliquam non justo. Morbi convallis quam nunc, a dapibus neque interdum fringilla.
      </div>
      <button className='open-modal-btn' onClick={openModal}>
        Open Modal
      </button>
      <Modal title={modalContent.title} text={modalContent.text} isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
