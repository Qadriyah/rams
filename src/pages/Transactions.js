import React, { Component } from 'react';
import TopNav from '../components/Nav/TopNav';

class Transactions extends Component {
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
                  <h4 className="page-title">Go Transactions</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <div className="white-box">
                    <h3 className="box-title m-l-10">General Transactions</h3>
                    <div className="col-xs-12 no-padding">
                      <div className="col-sm-3 sales-padd">
                        <div className="sales-statics-bor active">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Customers
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Sales</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                3000
                              </span>
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Returns</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                3000
                              </span>
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Income</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                3000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-sm-3 sales-padd"
                        onClick={() =>
                          this.props.history.push('/merchant-transactions')
                        }
                      >
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Merchants
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">C-M</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                3000
                              </span>
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">C-C</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                3000
                              </span>
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Total</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                3000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-sm-3 sales-padd"
                        onClick={() =>
                          this.props.history.push('/agent-transactions')
                        }
                      >
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Agents
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Deposits</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                3000
                              </span>
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Withdrawals</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                3000
                              </span>
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Income</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                3000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="white-box">
                    <h3 className="box-title m-l-10">Withdrawals</h3>
                    <div className="col-xs-12 no-padding">
                      <div
                        className="col-sm-3 sales-padd"
                        onClick={() =>
                          this.props.history.push('/customer-withdrawals')
                        }
                      >
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Customers
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Bank</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                30,000
                              </span>
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">MM</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                30,000
                              </span>
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Agent</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                3000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-sm-3 sales-padd"
                        onClick={() =>
                          this.props.history.push('/merchant-bank-withdrawals')
                        }
                      >
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Merchants
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Bank</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                30,000
                              </span>
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">MM</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                30,000
                              </span>
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Agent</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                3000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-sm-3 sales-padd"
                        onClick={() =>
                          this.props.history.push('/agent-bank-withdrawals')
                        }
                      >
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Agents
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Bank</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                30,000
                              </span>
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">MM</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                30,000
                              </span>
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Agent</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                3000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Transactions;
