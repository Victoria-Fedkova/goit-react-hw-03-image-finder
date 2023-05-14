import { Component } from 'react';
import { Header, Form, SearchInput, SearchBtn } from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

Notiflix.Notify.init({
  position: 'right-top',
});

export default class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = e => {
    const { value } = e.currentTarget;

    this.setState({
      query: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    if (!query.trim()) {
      Notiflix.Notify.failure('Sorry, incorect query. Please try again.');
      return;
    }
    //,.,
    this.props.onSearch(this.state.query);
  };

  render() {
    return (
      <Header>
        <a href="https://pixabay.com/" target="_blank" rel="noreferrer">
          <img
            src="https://pixabay.com/static/img/logo.svg"
            alt="logo"
            width="200"
          />
        </a>
        <Form onSubmit={this.handleSubmit}>
          <SearchInput
            type="text"
            name="query"
            autoComplete="off"
            value={this.state.query}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
          <SearchBtn type="submit">
            <FaSearch />
          </SearchBtn>
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
