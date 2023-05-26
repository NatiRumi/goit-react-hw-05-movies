import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Additional = () => {
  const location = useLocation();
  return (
    <div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast" state={{ from: location.state?.from ?? "/movies" }}>Cast</Link>
          {/* <Link to="cast">Cast</Link> */}
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
