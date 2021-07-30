import PropTypes from 'prop-types';
import axios from 'axios';

const KEY = '21819092-c619300407dec0bd926653a16';

const ApiService = ({ searchQuery, currentPage }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12
`,
    )
    .then(resp => resp.data.hits);
};

ApiService.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default ApiService;
