import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">InputForm</Link>
        </li>
        <li>
          <Link to="/results">Results</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
