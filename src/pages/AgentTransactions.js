import React, { Component } from 'react';
import TopNav from '../components/Nav/TopNav';

class AgentTransactions extends Component {
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
                    <h3 className="box-title">Agent Transaction List</h3>
                    <a
                      href="https://merchant.gopayapp.com/seller/transactions/transactionReport"
                      className="pull-right view-more"
                    >
                      <i className="fa fa-angle-double-right m-r-5"></i>
                      View More
                    </a>
                    <table
                      id="sellerTransactionTable"
                      className="table table-bordered"
                    >
                      <thead>
                        <tr>
                          <th>S.NO</th>
                          <th>Transaction ID</th>
                          <th>Date &amp; Time</th>
                          <th>Agent Name</th>
                          <th>Agent Phone</th>
                          <th>Transaction Type</th>
                          <th>Customer Name</th>
                          <th>Customer Phone</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>PAMTXN10001426</td>
                          <td>07/09/2020 - 05:55 AM</td>
                          <td>GoPay</td>
                          <td>256777743483</td>
                          <td>Top Up</td>
                          <td>Aijuka Miria</td>
                          <td>0712733812</td>
                          <td>10000</td>
                          <td>Pending</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>PAMTXN10001197</td>
                          <td>04/09/2020 - 06:44 AM</td>
                          <td>GoPay</td>
                          <td>256777743483</td>
                          <td>Top Up</td>
                          <td>Aijuka Miria</td>
                          <td>0712733812</td>
                          <td>10000</td>
                          <td>Success</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>PAMTXN10001187</td>
                          <td>02/09/2020 - 02:52 PM</td>
                          <td>GoPay</td>
                          <td>256751472930</td>
                          <td>Top Up</td>
                          <td>Nasasira Lebson</td>
                          <td>0712733812</td>
                          <td>10000</td>
                          <td>Success</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>PAMTXN10001180</td>
                          <td>01/09/2020 - 11:44 AM</td>
                          <td>GoPay</td>
                          <td>256772685270</td>
                          <td>Top Up</td>
                          <td>Yusuf</td>
                          <td>0712733812</td>
                          <td>10000</td>
                          <td>Failed</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>PAMTXN10001144</td>
                          <td>28/08/2020 - 06:09 AM</td>
                          <td>GoPay</td>
                          <td>256782389662</td>
                          <td>Top Up</td>
                          <td>Leah Kwagalakwe</td>
                          <td>0712733812</td>
                          <td>10000</td>
                          <td>Pending</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>PAMTXN10001118</td>
                          <td>26/08/2020 - 01:18 PM</td>
                          <td>GoPay</td>
                          <td>256755007214</td>
                          <td>Top Up</td>
                          <td>Ivy</td>
                          <td>0712733812</td>
                          <td>10000</td>
                          <td>Failed</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>PAMTXN10001105</td>
                          <td>26/08/2020 - 09:40 AM</td>
                          <td>GoPay</td>
                          <td>256772685270</td>
                          <td>Top Up</td>
                          <td>Yusuf</td>
                          <td>0712733812</td>
                          <td>10000</td>
                          <td>Success</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>PAMTXN10001103</td>
                          <td>26/08/2020 - 09:34 AM</td>
                          <td>GoPay</td>
                          <td>256772685270</td>
                          <td>Top Up</td>
                          <td>Aijuka Miria</td>
                          <td>0712733812</td>
                          <td>10000</td>
                          <td>Success</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>PAMTXN10001089</td>
                          <td>26/08/2020 - 06:46 AM</td>
                          <td>GoPay</td>
                          <td>256770944656</td>
                          <td>Top Up</td>
                          <td>Aijuka Miria</td>
                          <td>0712733812</td>
                          <td>10000</td>
                          <td>Success</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>PAMTXN10001084</td>
                          <td>25/08/2020 - 02:28 PM</td>
                          <td>GoPay</td>
                          <td>256772685270</td>
                          <td>Top Up</td>
                          <td>Yusuf</td>
                          <td>0712733812</td>
                          <td>10000</td>
                          <td>Pending</td>
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

export default AgentTransactions;
