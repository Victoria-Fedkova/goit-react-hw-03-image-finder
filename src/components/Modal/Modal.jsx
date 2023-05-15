import { createPortal } from 'react-dom';
import { Backdrop, ModalContent } from './Modal.styled';
import PropTypes from 'prop-types';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.handleModalClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.handleModalClose);
  }

  render() {
    return createPortal(
      <Backdrop onClick={this.props.handleModalClose}>
        <ModalContent>
          <img src={this.props.src} alt={this.props.alt} />
        </ModalContent>
      </Backdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  handleModalClose: PropTypes.func,
};

export default Modal;
