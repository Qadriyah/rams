import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MainDashboard extends Component {
  render() {
    return (
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <div className="app-header header-shadow">
          <div className="app-header__logo">
            <div className="logo-src"></div>
            <div className="header__pane ml-auto">
              <div>
                <button
                  type="button"
                  className="hamburger close-sidebar-btn hamburger--elastic"
                  data-class="closed-sidebar"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="app-header__mobile-menu">
            <div>
              <button
                type="button"
                className="hamburger hamburger--elastic mobile-toggle-nav"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
          <div className="app-header__menu">
            <span>
              <button
                type="button"
                className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
              >
                <span className="btn-icon-wrapper">
                  <i className="fa fa-ellipsis-v fa-w-6"></i>
                </span>
              </button>
            </span>
          </div>
          <div className="app-header__content">
            <div className="app-header-left">
              <div className="search-wrapper">
                <div className="input-holder">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Type to search"
                  />
                  <button className="search-icon">
                    <span></span>
                  </button>
                </div>
                <button className="close"></button>
              </div>
              <ul className="header-menu nav">
                <li className="nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                    <i className="nav-link-icon fa fa-database"> </i>
                    Statistics
                  </a>
                </li>
                <li className="btn-group nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                    <i className="nav-link-icon fa fa-edit"></i>
                    Projects
                  </a>
                </li>
                <li className="dropdown nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                    <i className="nav-link-icon fa fa-cog"></i>
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="app-main">
          <div className="app-sidebar sidebar-shadow">
            <div className="app-header__logo">
              <div className="logo-src"></div>
              <div className="header__pane ml-auto">
                <div>
                  <button
                    type="button"
                    className="hamburger close-sidebar-btn hamburger--elastic"
                    data-class="closed-sidebar"
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="app-header__mobile-menu">
              <div>
                <button
                  type="button"
                  className="hamburger hamburger--elastic mobile-toggle-nav"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </div>
            </div>
            <div className="app-header__menu">
              <span>
                <button
                  type="button"
                  className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                >
                  <span className="btn-icon-wrapper">
                    <i className="fa fa-ellipsis-v fa-w-6"></i>
                  </span>
                </button>
              </span>
            </div>
            <div className="scrollbar-sidebar">
              <div className="app-sidebar__inner">
                <ul className="vertical-nav-menu">
                  <li className="app-sidebar__heading">Dashboards</li>
                  <li>
                    <Link to="/">
                      <div className="mm-active">
                        <i className="metismenu-icon pe-7s-rocket"></i>
                        Dashboard
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/transactions">
                      <div className="mm-active">
                        <i className="metismenu-icon pe-7s-rocket"></i>
                        Go Transactions
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/graphs">
                      <div className="mm-active">
                        <i className="metismenu-icon pe-7s-rocket"></i>
                        Graphs
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/transation-details">
                      <div className="mm-active">
                        <i className="metismenu-icon pe-7s-rocket"></i>
                        Transaction Details
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="app-page-title">
                <div className="page-title-wrapper">
                  <div className="page-title-heading">
                    <div className="page-title-icon">
                      <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
                    </div>
                    <div>
                      Analytics Dashboard
                      <div className="page-title-subheading">
                        This is an example dashboard created using build-in
                        elements and components.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="mb-3 card">
                    <div className="card-header-tab card-header-tab-animation card-header">
                      <div className="card-header-title">
                        <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"></i>
                        Top Ups
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="tabs-eg-77"
                        >
                          <div className="row">
                            <div className="col-md-6 col-xl-4">
                              <div
                                className="card mb-3 widget-content bg-midnight-bloom"
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <div
                                  className="widget-heading text-white font-size-xlg"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  Customers
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Active
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>1,896</span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Inactive
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>1,896</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                              <div
                                className="card mb-3 widget-content bg-arielle-smile"
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <div
                                  className="widget-heading text-white font-size-xlg"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  Merchants
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Active
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>1,896</span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Inactive
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>1,896</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                              <div
                                className="card mb-3 widget-content bg-grow-early"
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <div
                                  className="widget-heading text-white font-size-xlg"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  Agents
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Active
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>1,896</span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Inactive
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>1,896</span>
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

              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="mb-3 card">
                    <div className="card-header-tab card-header-tab-animation card-header">
                      <div className="card-header-title">
                        <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"></i>
                        Pending Requests
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="tabs-eg-77"
                        >
                          <div className="row">
                            <div className="col-md-6 col-xl-4">
                              <div
                                className="card mb-3 widget-content bg-midnight-bloom"
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <div
                                  className="widget-heading text-white font-size-xlg"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  Customers
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Top Up
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>1,896</span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Withdrawal
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>1,896</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                              <div
                                className="card mb-3 widget-content bg-arielle-smile"
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <div
                                  className="widget-heading text-white font-size-xlg"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  Merchants
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Top Up
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>1,896</span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Withdrawal
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>1,896</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                              <div
                                className="card mb-3 widget-content bg-grow-early"
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <div
                                  className="widget-heading text-white font-size-xlg"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  Agents
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Top Up
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>1,896</span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Withdrawal
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>1,896</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                              <div
                                className="card mb-3 widget-content bg-danger"
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <div
                                  className="widget-heading text-white font-size-xlg"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  Failed Transactions
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Top Up
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>1,896</span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Withdrawal
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>1,896</span>
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

              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="mb-3 card">
                    <div className="card-header-tab card-header-tab-animation card-header">
                      <div className="card-header-title">
                        <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"></i>
                        Transactions
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="tabs-eg-77"
                        >
                          <div className="row">
                            <div className="col-md-6 col-xl-4">
                              <div
                                className="card mb-3 widget-content bg-midnight-bloom"
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <div
                                  className="widget-heading text-white font-size-xlg"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  Umeme
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Sales
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>UGX 1,896</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                              <div
                                className="card mb-3 widget-content bg-arielle-smile"
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <div
                                  className="widget-heading text-white font-size-xlg"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  Water
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Sales
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>UGX 1,896</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                              <div
                                className="card mb-3 widget-content bg-grow-early"
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <div
                                  className="widget-heading text-white font-size-xlg"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  Airtime
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Sales
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>UGX 1,896</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                              <div
                                className="card mb-3 widget-content bg-danger"
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <div
                                  className="widget-heading text-white font-size-xlg"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  Data
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Sales
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>UGX 1,896</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                              <div
                                className="card mb-3 widget-content bg-midnight-bloom"
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <div
                                  className="widget-heading text-white font-size-xlg"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  TV
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Sales
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>UGX 1,896</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                              <div
                                className="card mb-3 widget-content bg-arielle-smile"
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <div
                                  className="widget-heading text-white font-size-xlg"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  Matatu Pay
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Sales
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>UGX 1,896</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                              <div
                                className="card mb-3 widget-content bg-grow-early"
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <div
                                  className="widget-heading text-white font-size-xlg"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  Referrals
                                </div>
                                <div
                                  className="widget-content-wrapper text-white"
                                  style={{
                                    width: '100%',
                                  }}
                                >
                                  <div className="widget-content-left font-size-lg">
                                    <div className="widget-subheading">
                                      Amount
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="widget-numbers text-white">
                                      <span>UGX 1,896</span>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MainDashboard.displayName = 'MainDashboard';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainDashboard);
