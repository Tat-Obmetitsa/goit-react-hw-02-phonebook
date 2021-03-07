import React from 'react';
// import shortid from 'shortid';
// import styles from '../SearchFilter/SearchFilter.module.css';
// import PropTypes from 'prop-types';
const SearchFilter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" name="name" value={value} onChange={onChange} />
  </label>
);

// class SearchFilter extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
//   handleChange = e => {
//     this.setState({ contacts: e.currentTarget.value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.contacts);
//     this.setState({ contacts: '' });
//   };
//   filterInputId = shortid.generate();
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>Find contacts by name</label>
//         <input
//           type="text"
//           name="name"
//           value={this.state.contacts}
//           id={this.filterInputId}
//           onChange={this.handleChange}
//         ></input>
//       </form>
//     );
//   }
// }

export default SearchFilter;
