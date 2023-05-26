import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>This page does not currently exist</h2>
      <p>
        <Link to="/">You can go to the Homepage and continue searching</Link>
      </p>
    </div>
  );
};

export default NotFound;
