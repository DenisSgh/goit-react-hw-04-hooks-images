import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export default function Modal({ largeImage, modalClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      modalClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      modalClose();
    }
  };

  return (
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  modalClose: PropTypes.func.isRequired,
};
