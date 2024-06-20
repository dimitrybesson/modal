import './Modal.css'
import ReactModal from 'react-modal';

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root')

const Modal = ({ title, text, isOpen, closeModal }) => {

    return (
        <ReactModal
            isOpen={isOpen}
            className={'modal-content centered'}
            onRequestClose={closeModal}
            overlayClassName={`modal-bg`}
            contentLabel='Sample Modal'
        >

            <header className='modal-header'>
                <h2 id="modal-title">{title}</h2>
            </header>
            <div id="modal-description" className='modal-body'>
                {text}
            </div>
            <footer className='modal-footer'>
                <button onClick={closeModal}>
                    Save
                </button>
                <button onClick={closeModal}>
                    Close
                </button>
            </footer>

        </ReactModal>
    )
}

export default Modal;