import { Component } from 'react';
import axios from 'axios';

import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import Loader from '../Loader';
import Modal from '../Modal/Modal';
import Notiflix from 'notiflix';
import { Placeholder } from './Placeholder.styled';
Notiflix.Notify.init({
  position: 'right-bottom',
});

const PER_PAGE = 12;
export default class App extends Component {
  state = {
    images: [],
    selectedImageId: null,
    query: '',
    page: 0,
    isLoading: false,
    totalPages: 0,
    totalHits: 0,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.getPictures();
    }

    if (this.state.selectedImageId && prevState.selectedImageId === null) {
      window.addEventListener('keydown', this.handleModalClose);
    } else if (
      prevState.selectedImageId &&
      this.state.selectedImageId === null
    ) {
      window.addEventListener('keydown', this.handleModalClose);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModalClose);
  }

  handleModalClose = e => {
    if (e.key === 'Escape' || e.target === e.currentTarget) {
      this.setState({
        selectedImageId: null,
      });
    }
  };

  getPictures = async () => {
    const params = {
      key: '34244000-42c3edd46967142fbd554b6c5',
      q: this.state.query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.state.page,
      per_page: PER_PAGE,
    };
    this.setState({
      isLoading: true,
    });
    const response = await axios.get(`https://pixabay.com/api/`, {
      params,
    });

    if (response.data.totalHits === 0) {
      Notiflix.Notify.info('Sorry, there are no images to show.');
    }
    this.setState(prevState => ({
      images: [...prevState.images, ...response.data.hits],
      isLoading: false,
      totalPages: response.data.totalHits / PER_PAGE,
      totalHits: response.data.totalHits,
    }));
  };

  handleSubmit = query => {
    if (query !== this.state.query) {
      this.setState({
        images: [],
        page: 1,
        query,
      });
    }
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  selectPicture = id => {
    this.setState({
      selectedImageId: id,
    });
  };

  render() {
    const {
      isLoading,
      totalPages,
      page,
      totalHits,
      query,
      images,
      selectedImageId,
    } = this.state;

    const { largeImageURL, tags } = selectedImageId
      ? images.find(({ id }) => id === selectedImageId)
      : {};

    return (
      <div>
        <Searchbar onSearch={this.handleSubmit} />
        {isLoading && <Loader />}
        {totalHits === 0 && query !== '' && !isLoading ? (
          <Placeholder><span>Oops... We can't find what you want 😔</span></Placeholder>
        ) : (
          <ImageGallery images={images} onImgClick={this.selectPicture} />
        )}
        {totalPages > page && !isLoading && (
          <Button onLoadMore={this.onLoadMore} />
        )}
        {selectedImageId && (
          <Modal
            src={largeImageURL}
            alt={tags}
            onBackdropClick={this.handleModalClose}
          />
        )}
      </div>
    );
  }
}
