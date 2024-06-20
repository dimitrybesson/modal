import './Modal.scss'
import ReactModal from 'react-modal';

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root')

const Modal = ({ title, text, isOpen, closeModal }) => {

    return (
        <ReactModal
            isOpen={isOpen}
            className={'modal-content centered'}
            closeTimeoutMS={1000}
            onRequestClose={closeModal}
            overlayClassName={`modal-bg`}
            contentLabel='Sample Modal'
            aria={{
                labelledby: 'modal-title',
                describedby: 'modal-description',
                modal: 'true'
            }}
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