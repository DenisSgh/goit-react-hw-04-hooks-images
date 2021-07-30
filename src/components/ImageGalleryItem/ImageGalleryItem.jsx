import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, alt, largeImage, modalOpen }) => {
  const sendLargeImage = () => {
    modalOpen(largeImage);
  };

  return (
    <li className={s.ImageGalleryItem} onClick={sendLargeImage}>
      <img src={url} alt={alt} className={s.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  modalOpen: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
