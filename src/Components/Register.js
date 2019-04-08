import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Register extends Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    password: ''
  }

  render() {
    return (
      <div className="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto mt-lg-5">
        <div className="card">
          <div className="card-body">
            <h3>Register Page</h3>
            <div className="md-form">
              <input onChange={this.handleChange.bind(this)} name="firstname" type="text" placeholder="First Name" className="form-control" />
            </div>
            <hr />
            <div className="md-form">
              <input onChange={this.handleChange.bind(this)} name="lastname" type="password" placeholder="Last Name" className="form-control" />
            </div>
            <hr />
            <div className="md-form">
              <input onChange={this.handleChange.bind(this)} name="username" type="text" placeholder="Username" className="form-control" />
            </div>
            <hr />
            <div className="md-form">
              <input onChange={this.handleChange.bind(this)} name="password" type="password" placeholder="Password" className="form-control" />
            </div>
            <div className="text-center">
              <button className="btn btn-primary" onClick={this.register.bind(this)}>Sign up</button>
              <hr />
              Already have an account?
             <Link to="/login" id="linkB"> Sign in</Link>
            </div>
          </div>
        </div>
      </div>

    );
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  async register() {
    let mandatory = this.state;
    if (mandatory.firstname === '') {
      alert('First Name required!')
    }
    else if (mandatory.lastname === '') {
      alert('Last Name required!')
    }
    else if (mandatory.username === '') {
      alert('Username required!')
    }
    else if (mandatory.password === '') {
      alert('Password required!')
    }
    else {
      await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });
      alert('Welcome!');
      this.props.history.push("/login");
    }
  }
}

export default Register;
