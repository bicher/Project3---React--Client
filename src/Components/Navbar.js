import React, { Component } from 'react';
import { connect } from "react-redux";
import  { LogOut }  from '../State/actions'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        if (this.props.role === "Admin") {
            return (
                <nav className="navbar navbar-expand-lg navbar-absolute fixed-top ">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
                            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav mr-auto smooth-scroll">
                                <li className="nav-item">
                                    <span className="nav-link disabled">Hello {this.props.name}</span>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Vacations</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/add" className="nav-link">Add New Vacation</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/graph" className="nav-link">Reports</Link>
                                </li>
                                <li className="nav-item"><Link>
                                    <span className="nav-link" onClick={this.logoutBtn.bind(this)}><i className="fa fa-power-off"></i> Logout</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )
        }
        else {
            return (
                <nav className="navbar navbar-expand-lg navbar-absolute fixed-top">
                    <div className="container">
                        <ul className="navbar-nav mr-auto smooth-scroll">
                            <li className="nav-item">
                                <span className="nav-link disabled">Hello {this.props.name}</span>
                            </li>
                            <li className="nav-item">
                                <Link><span className="nav-link" onClick={this.logoutBtn.bind(this)}><i className="fa fa-power-off"></i> Logout</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            );
        }
    }

    logoutBtn() {
        this.props.logOut();
        
    }
}

const mapStateToProps = state => {
    return {
      isLogged: state.isLogged,
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
        logOut: () => {
            dispatch(LogOut());
        }
    }
}

const navbar = connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default navbar;
