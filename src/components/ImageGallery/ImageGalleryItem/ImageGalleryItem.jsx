import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <GalleryItem>
      <GalleryImg src={src} alt={alt} onClick={onClick} />
    </GalleryItem>
  );
};
ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
