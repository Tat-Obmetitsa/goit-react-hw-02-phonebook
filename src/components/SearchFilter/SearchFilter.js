import React from 'react';
import s from '../SearchFilter/SearchFilter.module.css';
import PropTypes from 'prop-types';
const SearchFilter = ({ value, onChange }) => (
  <label className={s.form__label}>
    Find contacts by name
    <input type="text" name="name" value={value} onChange={onChange} className={s.form__input} />
  </label>
);
SearchFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default SearchFilter;
