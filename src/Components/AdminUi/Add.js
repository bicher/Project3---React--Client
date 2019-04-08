import React, { Component } from 'react';

class Add extends Component {

    state = {
        details: '',
        destination: '',
        image: '',
        startdate: '',
        enddate: '',
        price: ''
    }

    render() {
        return (
            <div classNameName="Add">
                <div className="md-form">
                    <input onChange={this.handleChange.bind(this)} name="details" placeholder="Description" className="form-control" />
                </div>
                <div className="md-form">
                    <input onChange={this.handleChange.bind(this)} name="destination" placeholder="destination" className="form-control" />
                </div>
                <div className="md-form">
                    <input type="file" onChange={this.handleChange.bind(this)} name="image" className="form-control" />
                </div>
                <div className="md-form">
                    <input onChange={this.handleChange.bind(this)} name="startdate" type="date" className="form-control" />
                </div>
                <div className="md-form">
                    <input onChange={this.handleChange.bind(this)} name="enddate" type="date" className="form-control" />
                </div>
                <div className="md-form">
                    <input onChange={this.handleChange.bind(this)} name="price" type="number" className="form-control" />
                </div>
                <div className="text-center">
                    <button onClick={this.add.bind(this)}>Add Vacation</button>

                </div>
            </div>
        );
    }
    handleChange(ev) {
        this.setState({ [ev.target.name]: ev.target.value })
    }

    async add() {
        await fetch('http://localhost:3000/addvacation', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });
    }
}
export default Add;
