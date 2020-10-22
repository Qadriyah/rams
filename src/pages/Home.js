import React, { Component } from 'react';
import TopNav from '../components/Nav/TopNav';

class Home extends Component {
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
                    <h3 className="box-title m-l-10">Account Top-ups</h3>
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
                              <span className="mr-3 pt-2">Active</span>
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
                              <span className="mr-3 pt-2">Inactive</span>
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
                      <div className="col-sm-3 sales-padd">
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Merchants
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Active</span>
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
                              <span className="mr-3 pt-2">Inactive</span>
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
                      <div className="col-sm-3 sales-padd">
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Agents
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Active</span>
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
                              <span className="mr-3 pt-2">Inactive</span>
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
                    <h3 className="box-title m-l-10">Pending Requests</h3>
                    <div className="col-xs-12 no-padding">
                      <div className="col-sm-3 sales-padd mb-4">
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Customers
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Top Up</span>
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
                              <span className="mr-3 pt-2">Withdrawal</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                30,000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 sales-padd mb-4">
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Merchants
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Top Up</span>
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
                              <span className="mr-3 pt-2">Withdrawal</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                30,000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 sales-padd mb-4">
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Agents
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Top Up</span>
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
                              <span className="mr-3 pt-2">Withdrawal</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                30,000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 sales-padd mb-4">
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Failed Transactions
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Top Up</span>
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
                              <span className="mr-3 pt-2">Withdrawal</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                30,000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 sales-padd mb-4">
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Pending Activations
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">KYC</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                30
                              </span>
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Customer A/C</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                75
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="white-box">
                    <h3 className="box-title m-l-10">Transactions</h3>
                    <div className="col-xs-12 no-padding">
                      <div
                        className="col-sm-3 sales-padd mb-4"
                        onClick={() =>
                          this.props.history.push('/transation-list')
                        }
                      >
                        <div className="sales-statics-bor hover">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Umeme
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
                                30,000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-sm-3 sales-padd mb-4"
                        onClick={() =>
                          this.props.history.push('/nwsc-transactions')
                        }
                      >
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Water
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
                                30,000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-sm-3 sales-padd mb-4"
                        onClick={() =>
                          this.props.history.push('/airtime-transactions')
                        }
                      >
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Airtime
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
                                30,000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-sm-3 sales-padd mb-4"
                        onClick={() =>
                          this.props.history.push('/data-transactions')
                        }
                      >
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Data
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
                                30,000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-sm-3 sales-padd"
                        onClick={() =>
                          this.props.history.push('/tv-transactions')
                        }
                      >
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              TV
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
                                30,000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-sm-3 sales-padd"
                        onClick={() =>
                          this.props.history.push('/matatu-transactions')
                        }
                      >
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Matatu Pay
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
                                30,000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-sm-3 sales-padd"
                        onClick={() =>
                          this.props.history.push('/transaction-list')
                        }
                      >
                        <div className="sales-statics-bor">
                          <div className="pt-4 pb-4 d-flex flex-column">
                            <div className="sales-sale-amount-dalar today-fontchanges">
                              Referals
                            </div>
                            <div
                              className="d-flex flex-row"
                              style={{ fontSize: '18px' }}
                            >
                              <span className="mr-3 pt-2">Amount</span>
                              <span
                                className="text-right flex-fill"
                                style={{ fontSize: '24px' }}
                              >
                                30,000
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

export default Home;
