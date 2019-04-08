import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalEdit extends Component {
  constructor(props) {
    super(props);
      this.state = {
        modal: props.initialModalState,
        destination: this.props.forModal.destination,
        startdate: this.props.forModal.startdate,
        enddate: this.props.forModal.enddate,
        details: this.props.forModal.details,
        price: this.props.forModal.price
      };
    }
  
    render() {
      return (
        <div className="modalEdit">
           <span className="fa fa-edit top-right" onClick={this.toggle.bind(this)}>Edit</span>
          <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.props.className}>
            <ModalHeader toggle={this.toggle.bind(this)}><h4>Edit This Vacation</h4></ModalHeader>
            <ModalBody>
            <div className="vacations">
                    <div className="card card-image" style={{ backgroundImage: `url(${this.props.forModal.image})` }}>
                        <div className="text-white pt-3 pb-3 px-4">
                            <div>
                                <input onChange={this.handleChange.bind(this)} name="destination" className="card-title pt-1 text-center" value={this.props.forModal.destination}/>
                                <i className="fa fa-plane-departure"><input onChange={this.handleChange.bind(this)} name="startdate" className="text-center" value={this.props.forModal.startdate}/></i>
                                    <br /><i className="fa fa-plane-arrival"><input className="text-center" onChange={this.handleChange.bind(this)} name="enddate" value={this.props.forModal.enddate}/></i>
                                <input className="text-left" onChange={this.handleChange.bind(this)} name="details" value={this.props.forModal.details} />
                                <input className="text-center" onChange={this.handleChange.bind(this)} name="price" value={this.props.forModal.price} /><i className="fa fa-usd"></i>
                                
                            </div>
                        </div>
                    </div>
                </div >
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.editVacation.bind(this)}>Edit</Button>{' '}
              <Button color="secondary" onClick={this.toggle.bind(this)}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

      handleChange (ev) {
        this.setState({[ev.target.name]: ev.target.value})
      }

      async editVacation(){
        await fetch('http://localhost:3000/edit', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
      });
      }
  }
  
  export default ModalEdit;

