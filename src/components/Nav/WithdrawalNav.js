import React from 'react';
import { Link } from 'react-router-dom';

const WithdrawalNav = props => {
  let isCustomer = true;
  if (props.route) {
    const route = props.route.location.pathname;
    isCustomer = route.includes('merchant') ? false : true;
  }

  return (
    <nav className="">
      <div className="">
        <ul className="nav popleftul" id="side-men">
          <li>
            <Link
              className="logo"
              to={`${
                props.route &&
                props.route.location.pathname.includes('customer')
                  ? '/customer-withdrawals'
                  : props.route &&
                    props.route.location.pathname.includes('merchant')
                  ? '/merchant-bank-withdrawals'
                  : '/agent-bank-withdrawals'
              }`}
            >
              Bank Withdrawals
            </Link>
          </li>
          <li>
            <Link
              to={`${
                props.route &&
                props.route.location.pathname.includes('customer')
                  ? '/customer-mm-withdrawals'
                  : props.route &&
                    props.route.location.pathname.includes('merchant')
                  ? '/merchant-mm-withdrawals'
                  : '/agent-mm-withdrawals'
              }`}
            >
              MM Withdrawals
            </Link>
          </li>
          <li>
            <Link
              to={`${
                props.route &&
                props.route.location.pathname.includes('customer')
                  ? '/customer-agent-withdrawals'
                  : props.route &&
                    props.route.location.pathname.includes('merchant')
                  ? '/merchant-agent-withdrawals'
                  : '/agent-agent-withdrawals'
              }`}
            >
              Agent Withdrawals
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default WithdrawalNav;
