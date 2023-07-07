import React from 'react';
import css from'./SearchingFilter.module.css'
import { useDispatch} from 'react-redux';
import { setContactFilter } from 'redux/actions';


const SearchingFilter = () => {

  const dispatch = useDispatch();

  const handleFilterChange = (e) => dispatch(setContactFilter(e.target.value))

  return (
    <label className={css.formLabel} >
        Find contacts by name
        <input onChange={handleFilterChange}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        </label>
  )
}

export default SearchingFilter

