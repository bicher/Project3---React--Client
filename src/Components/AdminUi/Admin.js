import React, { Component } from 'react';
import { connect } from "react-redux";
import Navbar from '../Navbar';
import Footer from '../Footer';
import Vacation from '../UserUi/Vacation';




class Admin extends Component {


    render() {
        return (
            <React.Fragment>
                <Navbar name={this.props.firstname} role={this.props.role}/>
                <div className="admin">
                    <div className="col-xl-8 col-lg-11 col-md-11 col-sm-1 mx-auto mt-lg-5">
                        <div className="container text-center">
                            <h1>Admin Panel</h1>
                        </div>
                        {this.props.vacations.map(v => <Vacation key={v.id} v={v} role={this.props.role} /> )}
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    debugger;
    return { vacations: state.vacations, firstname: state.firstname, role: state.role };
};

const mapDispatchToProps = dispatch => {
    return {
        loadVacations: () => {
            return dispatch();
        }
    }
};

const admin = connect(mapStateToProps, mapDispatchToProps)(Admin);
export default admin;