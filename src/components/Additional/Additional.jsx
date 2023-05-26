import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Additional = () => {
  return (
    <div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Additional;
