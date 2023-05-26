import React from 'react';
import css from './SearchBarStyle.module.css'


const SearchBar = ({ onSubmit, setSearchParams }) => {
  
  
  // console.log(searchparams.get('filter'))

  // const handleChange = ({target}) => {
  //   setSearchParams({filter: target.value})
  //   // console.log(target.value)
  // }

  return (
    <div className={css.formContainer}><form onSubmit={e => {
      e.preventDefault();
      onSubmit(e.target.text.value);
      setSearchParams({query: e.target.text.value.trim()});
      // console.log(e.target.text.value)
    }} >
    <input
      className="input"
      type="text"
      name="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movie"
      // onChange={handleChange}
    />

    <button type="submit" className={css.button}>
      <span className={css.buttonLabel}>Search</span>
    </button>
  </form>

    </div>
    
  );
};

export default SearchBar;
