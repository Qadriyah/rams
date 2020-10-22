import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Graphs extends Component {
  componentDidMount() {
    console.log(this.props, '>>>>>>>>>>>>>>>');
  }
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
                  <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
                    <li className="nav-item">
                      <a
                        role="tab"
                        className="nav-link active"
                        id="tab-0"
                        data-toggle="tab"
                        href="#tab-content-0"
                      >
                        <span>Circular Charts</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        role="tab"
                        className="nav-link"
                        id="tab-1"
                        data-toggle="tab"
                        href="#tab-content-1"
                      >
                        <span>Lines &#38; Bars Charts</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane tabs-animation fade show active"
                  id="tab-content-0"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="main-card mb-3 card">
                        <div className="card-body">
                          <h5 className="card-title">Pie Chart</h5>
                          <canvas id="chart-area"></canvas>
                        </div>
                      </div>
                      <div className="main-card mb-3 card">
                        <div className="card-body">
                          <h5 className="card-title">Radar Chart</h5>
                          <canvas id="radar-chart"></canvas>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="main-card mb-3 card">
                        <div className="card-body">
                          <h5 className="card-title">Doughnut</h5>
                          <canvas id="doughnut-chart"></canvas>
                        </div>
                      </div>
                      <div className="main-card mb-3 card">
                        <div className="card-body">
                          <h5 className="card-title">Polar Chart</h5>
                          <canvas id="canvas"></canvas>
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

export default Graphs;
