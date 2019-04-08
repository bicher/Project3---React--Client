import React, { Component } from 'react';
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
                                    <Link to="/add" className="nav-link">Add New Vacation</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Reports</Link>
                                </li>
                                <li className="nav-item"><Link>
                                    <span className="nav-link" onClick={this.logout.bind(this)}><i class="fa fa-power-off"></i> Logout</span></Link>
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
                                <Link><span className="nav-link" onClick={this.logout.bind(this)}><i class="fa fa-power-off"></i> Logout</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            );
        }
    }

    async logout() {
        let res = await fetch('http://localhost:3000/logout')
        let data = await res.json();
    }
}

export default Navbar;
