import React from 'react';
import PropTypes from "prop-types";
import css from'./SearchingFilter.module.css'


const SearchingFilter = ({ onFilterChange }) => {
  return (
    <label className={css.formLabel} >
        Find contacts by name
        <input onChange={onFilterChange}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        </label>
  )
}

export default SearchingFilter

SearchingFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired
}