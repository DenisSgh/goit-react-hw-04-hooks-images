import { useState, useEffect } from 'react';

import ApiService from 'components/ApiService';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

export default function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [largeImage, setLargeImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    fetchPictures();
  }, [searchQuery]);

  const onChangeQuery = query => {
    if (searchQuery === query) {
      return;
    }
    setSearchQuery(query);
    setImages([]);
    setCurrentPage(1);
  };

  const fetchPictures = () => {
    const options = { searchQuery, currentPage };

    setIsLoading(true);

    // setTimeout для лоадера
    setTimeout(() => {
      ApiService(options)
        .then(images => {
          setImages(prev => [...prev, ...images]);
          setCurrentPage(prev => prev + 1);
        })
        .then(smoothScroll)
        .finally(setIsLoading(false));
    }, 500);
  };

  const smoothScroll = () => {
    if (currentPage > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const modalOpen = largeImage => {
    setShowModal(true);
    setLargeImage(largeImage);
  };

  const modalClose = () => {
    setShowModal(false);
    setLargeImage('');
  };

  return (
    <>
      <Searchbar onSubmit={onChangeQuery} />
      <ImageGallery images={images} modalOpen={modalOpen} />
      {showModal && <Modal modalClose={modalClose} largeImage={largeImage} />}
      {isLoading && <Loader />}
      {images.length > 0 && <Button onClick={fetchPictures} />}
    </>
  );
}
