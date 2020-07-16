import React, { useState } from 'react';
import {Modal} from 'react-bootstrap';

const RegisterModal = props => {
    const [user, setUser] = useState({});
    const handleClose = () => {
        props.closeModal(false);
    }
    return (
        <Modal dialogClassName={"patient-modal"} show={props.show} onHide={handleClose} backdrop="static">
        <Modal.Header backdropClassName={"modal-header border-0"} closeButton>
        </Modal.Header>
        <Modal.Body backdropClassName={"modal-body m-0 p-0"} >
            <div className="col-md-12 m-0 p-0 row container">
              <div className="col-md-1" />
              <div className="col-md-4">
                <div className="text-white">Enter your Details</div>
                <input className="mt-3" placeholder="Name" onChange={evt => setUser({...user, name: evt.target.value})} value={user.name} />
                <input className="mt-3" placeholder="E-Mail" pattern="^[^ ]+@[^ ]+\.[a-z]{2,6}$"
                onChange={evt => setUser({...user, email: evt.target.value})} value={user.email} />
                <input className="mt-3" placeholder="Phone No" type="number"
                onChange={evt => setUser({...user, phone: evt.target.value})} value={user.phone} />
              </div>
              <div className="col-md-1" />
              <div className="col-md-5">
                <div className="text-white">Select Your Destination</div>
                <select className="mt-3" >
                  <option disabled selected hidden>Select Your State</option>
                  <option value="kerala">Kerala</option>
                  <option value="tamilnadu">Tamil Nadu</option>
                </select>
                <select className="mt-3" >
                  <option disabled selected hidden>Select Your State</option>
                  <option value="kerala">Kerala</option>
                  <option value="tamilnadu">Tamil Nadu</option>
                </select>
                <div className="row p-0 m-0 mt-3 justify-content-between align-items-center">
                  <div className="col-md-5 button-modal">SUBMIT</div>
                  <div className="col-md-5 button-modal">CANCEL</div>
                </div>
              </div>
            </div>  
        </Modal.Body>
        <Modal.Footer backdropClassName={"modal-footer"} />
      </Modal>
    )
}

export default RegisterModal;