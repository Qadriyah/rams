import React, { Component } from 'react';
import TopNav from '../components/Nav/TopNav';
import WithdrawalNav from '../components/Nav/WithdrawalNav';

class MerchantWithdrawals extends Component {
  render() {
    return (
      <div>
        <div
          className="preloader"
          style={{
            display: 'none',
          }}
        >
          <div className="cssload-speeding-wheel" />
        </div>
        <div id="wrapper">
          <TopNav />
          <div id="page-wrapper">
            <div className="container-fluid">
              <div className="row bg-title">
                <div className="col-xs-12">
                  <h4 className="page-title">Dashboard</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <div className="white-box">
                    <h3 className="box-title">Merchant-Bank Withdrawals</h3>
                    <a
                      href="https://merchant.gopayapp.com/seller/transactions/transactionReport"
                      className="pull-right view-more"
                    >
                      <i className="fa fa-angle-double-right m-r-5"></i>
                      View More
                    </a>
                    <div className="navbar-header--container">
                      <div className="navbar-header--secondary" />
                      <div className="navbar-header--secondary">
                        <WithdrawalNav route={this.props} />
                      </div>
                      <div className="navbar-header--secondary" />
                    </div>
                    <table
                      id="sellerTransactionTable"
                      className="table table-bordered"
                    >
                      <thead>
                        <tr>
                          <th>S.NO</th>
                          <th>Transaction ID</th>
                          <th>Date &amp; Time</th>
                          <th>Business Name</th>
                          <th>Phone Number</th>
                          <th>Bank Name</th>
                          <th>Account No.</th>
                          <th>Wallet</th>
                          <th>Amount</th>
                          <th>Income</th>
                          <th>Tax</th>
                          <th>Balance</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>PAMTXN10001426</td>
                          <td>07/09/2020 - 05:55 AM</td>
                          <td>Martha Kay Beddings</td>
                          <td>256777743483</td>
                          <td>Equity Bank</td>
                          <td>1032100458543</td>
                          <td>100000</td>
                          <td>70000</td>
                          <td>500</td>
                          <td>90</td>
                          <td>29500</td>
                          <td className="pending">Pending</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>PAMTXN10001197</td>
                          <td>04/09/2020 - 06:44 AM</td>
                          <td>Martha Kay Beddings</td>
                          <td>256777743483</td>
                          <td>Equity Bank</td>
                          <td>1032100458543</td>
                          <td>100000</td>
                          <td>70000</td>
                          <td>500</td>
                          <td>90</td>
                          <td>29500</td>
                          <td className="pending">Pending</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>PAMTXN10001187</td>
                          <td>02/09/2020 - 02:52 PM</td>
                          <td>Martha Kay Beddings</td>
                          <td>256777743483</td>
                          <td>Equity Bank</td>
                          <td>1032100458543</td>
                          <td>100000</td>
                          <td>70000</td>
                          <td>500</td>
                          <td>90</td>
                          <td>29500</td>
                          <td className="failed">Failed</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>PAMTXN10001180</td>
                          <td>01/09/2020 - 11:44 AM</td>
                          <td>Martha Kay Beddings</td>
                          <td>256777743483</td>
                          <td>Equity Bank</td>
                          <td>1032100458543</td>
                          <td>100000</td>
                          <td>70000</td>
                          <td>500</td>
                          <td>90</td>
                          <td>29500</td>
                          <td className="failed">Pailed</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>PAMTXN10001144</td>
                          <td>28/08/2020 - 06:09 AM</td>
                          <td>Martha Kay Beddings</td>
                          <td>256777743483</td>
                          <td>Equity Bank</td>
                          <td>1032100458543</td>
                          <td>100000</td>
                          <td>70000</td>
                          <td>500</td>
                          <td>90</td>
                          <td>29500</td>
                          <td className="pending">Pending</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>PAMTXN10001118</td>
                          <td>26/08/2020 - 01:18 PM</td>
                          <td>Martha Kay Beddings</td>
                          <td>256777743483</td>
                          <td>Equity Bank</td>
                          <td>1032100458543</td>
                          <td>100000</td>
                          <td>70000</td>
                          <td>500</td>
                          <td>90</td>
                          <td>29500</td>
                          <td className="pending">Pending</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>PAMTXN10001105</td>
                          <td>26/08/2020 - 09:40 AM</td>
                          <td>Martha Kay Beddings</td>
                          <td>256777743483</td>
                          <td>Equity Bank</td>
                          <td>1032100458543</td>
                          <td>100000</td>
                          <td>70000</td>
                          <td>500</td>
                          <td>90</td>
                          <td>29500</td>
                          <td className="successful">Success</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>PAMTXN10001103</td>
                          <td>26/08/2020 - 09:34 AM</td>
                          <td>Martha Kay Beddings</td>
                          <td>256777743483</td>
                          <td>Equity Bank</td>
                          <td>1032100458543</td>
                          <td>100000</td>
                          <td>70000</td>
                          <td>500</td>
                          <td>90</td>
                          <td>29500</td>
                          <td className="successful">Success</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>PAMTXN10001089</td>
                          <td>26/08/2020 - 06:46 AM</td>
                          <td>Martha Kay Beddings</td>
                          <td>256777743483</td>
                          <td>Equity Bank</td>
                          <td>1032100458543</td>
                          <td>100000</td>
                          <td>70000</td>
                          <td>500</td>
                          <td>90</td>
                          <td>29500</td>
                          <td className="successful">Success</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>PAMTXN10001084</td>
                          <td>25/08/2020 - 02:28 PM</td>
                          <td>Martha Kay Beddings</td>
                          <td>256777743483</td>
                          <td>Equity Bank</td>
                          <td>1032100458543</td>
                          <td>100000</td>
                          <td>70000</td>
                          <td>500</td>
                          <td>90</td>
                          <td>29500</td>
                          <td className="pending">Pending</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MerchantWithdrawals;
