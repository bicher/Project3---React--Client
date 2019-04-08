import React, { Component } from 'react';
import ModalEdit from '../AdminUi/ModalEdit';





class Vacation extends Component {
    state = {
        buttonClick: true,
        follow: this.props.v.followers
        
    }
    render() {
        if (this.props.role === "Admin") {
            debugger;
            return (
                <div className="vacations">
                    <div className="card card-image" style={{ backgroundImage: `url(${this.props.v.image})` }}>
                        <div>
                            <span className="fa fa-times top-left" onClick={this.deletePost.bind(this)}></span><br />
                            <ModalEdit forModal={this.props.v}/>
                        </div>
                        <div className="text-white pt-3 pb-3 px-4">
                            <div>
                                <h3 className="card-title pt-1 text-center"><strong>{this.props.v.destination}</strong></h3>
                                <p className="text-center"><i className="fa fa-plane-departure"></i>{this.props.v.startdate}
                                    <br /><i className="fa fa-plane-arrival"></i>{this.props.v.enddate}</p>
                                <p className="text-left">{this.props.v.details}</p>
                                <p className="text-center">{this.props.v.price}<i className="fa fa-usd"></i></p>
                                
                            </div>
                        </div>
                    </div>
                </div >

            )
        }
        else {
            debugger;
            return (
                <div className="vacations">
                    <div className="card card-image" style={{ backgroundImage: `url(${this.props.v.image})` }}>
                        <div className="text-white pt-3 pb-3 px-4">
                            <div>
                                <h3 className="card-title pt-1 text-center"><strong>{this.props.v.destination}</strong></h3>
                                <p className="text-center"><i className="fa fa-plane-departure"></i>{this.props.v.startdate}
                                    <br /><i className="fa fa-plane-arrival"></i>{this.props.v.enddate}</p>
                                <p className="text-left">{this.props.v.details}</p>
                                <p className="text-center">{this.props.v.price}<i className="fa fa-usd"></i></p>
                                <button onClick={this.follow.bind(this)}>{this.state.buttonClick ? 'Follow' : 'Unfollow'} ({this.state.follow ? +1 : this.state.follow  })</button>
                            </div>
                        </div>

                    </div>
                </div >
            );
        }
    }
    follow() {
        this.setState(function (prevState) {
            return { buttonClick: !prevState.buttonClick };
        });
        this.setState(function (prevState) {
            return { follow: !prevState.follow };
        });
    }
   async deletePost(){
       debugger;
        let res = await fetch('http://localhost:3000/delete?id='+this.props.v.id)
        let data = await res.json();
       
    }
    
}

export default Vacation;