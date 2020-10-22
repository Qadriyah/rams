import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <nav className="navbar navbar-default navbar-static-top m-b-0">
      <div className="navbar-header">
        <div className="top-left-part">
          <Link className="logo" to="#">
            GO PAY
          </Link>
        </div>
        <ul className="nav popleftul" id="side-menu">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/go-transactions">Go Transactions</Link>
          </li>
          <li>
            <Link to="#">Graphs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
