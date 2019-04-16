import React, { Component } from 'react';
import { connect } from "react-redux";

class Graph extends Component {


    render() {
        return (
            <React.Fragment>
            
          </React.Fragment>
        )
    }
}


const mapStateToProps = state => {
    // return { vacations: state.vacations, firstname: state.firstname, role: state.role };
};

const mapDispatchToProps = dispatch => {
    // return {
    //     loadVacations: () => {
    //         return dispatch();
    //     }
    // }
};

const graph = connect(mapStateToProps, mapDispatchToProps)(Graph);
export default graph;
