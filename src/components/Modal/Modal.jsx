import { createPortal } from 'react-dom';
import { Backdrop, ModalContent } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');
const Modal = ({ src, alt, onBackdropClick }) => {
  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <ModalContent>
        <img src={src} alt={alt} />
      </ModalContent>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onBackdropClick: PropTypes.func,
};

export default Modal;
