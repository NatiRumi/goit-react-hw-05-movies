import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({ onSubmit }) => {
  const [params, setParams] = useSearchParams();
  setParams({filter: 'gfgf'})
  console.log(params.get('filter'))

  return (
    <form onSubmit={e => {
        e.preventDefault();
        onSubmit(e.target.text.value);
      }}>
      <input
        className="input"
        type="text"
        name="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />

      <button type="submit" className="button">
        <span className="button-label">Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
