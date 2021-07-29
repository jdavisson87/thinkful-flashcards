import React from 'react';
import { useHistory, useRouteMatch, Link } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();
  const url = useRouteMatch();

  console.log(url);
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <Link to="/">
          <li className="breadcrumb-item active" aria-current="page">
            Home
          </li>
        </Link>
      </ol>
    </nav>
  );
};

export default NavBar;
