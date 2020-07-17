import React, { useState } from 'react';
import {Modal} from 'react-bootstrap';

const RegisterModal = props => {
    const [user, setUser] = useState({name:'', email:'', phone: '', dest:'', state:''});
    const [error, seterror] = useState({email: false, phone: false});
    const handleClose = () => {
        setUser({});
        props.closeModal(false);
    }
    const submit = () => {
      if(emailVerify()){
        seterror({...error, email: true})
      }
      else if(phoneVerify()){
        seterror({...error, phone: true})
      }
      else{
        handleClose();
      }
    }

    const emailVerify = () => {
      var regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      if(!(regex.test(user.email))){
        seterror({...error, email: true});
        return true;
      }
      else {
        seterror({...error, email: false});
        return false;
      }
    }
    const phoneVerify = () => {
      if(!(user.phone.length === 10)){
        seterror({...error, phone: true});
        return true;
      }
      else {
        seterror({...error, phone: false});
        return false;
      }
    }
    return (
        <Modal dialogClassName="patient-modal" show={props.show} onHide={handleClose} backdrop="static">
        <Modal.Header backdropClassName="modal-header border-0" closeButton>
        </Modal.Header>
        <Modal.Body backdropClassName={"modal-body m-0 p-0"} >
            <div className="col-md-12 m-0 p-0 row container">
              <div className="col-md-1" />
              <div className="col-md-4">
                <div className="text-white">Enter your Details
                </div>
                <input className="mt-3" placeholder="Name" onChange={evt => setUser({...user, name: evt.target.value})} value={user.name} />
                <input className="mt-3" placeholder="E-Mail" pattern="" type="email" onBlur={emailVerify}
                onChange={evt => setUser({...user, email: evt.target.value})} value={user.email} />
                {error.email && <span className="text-warning">Enter email </span>}
                <input className="mt-3" placeholder="Phone No" type="number" onBlur={phoneVerify}
                onChange={evt => setUser({...user, phone: evt.target.value})} value={user.phone} />
                {error.phone && <span className="text-warning">Enter phone no</span>}
              </div>
              <div className="col-md-1" />
              <div className="col-md-5">
                <div className="text-white">Select Your Destination</div>
                <select className="mt-3" value={user.state} onChange={evt => setUser({...user, state: evt.target.value})}>
                  <option value="" disabled selected hidden>Select Your State</option>
                  <option className="select-option" value="kerala">Kerala</option>
                  <option className="select-option" value="tamilnadu">Tamil Nadu</option>
                </select>
                <select className="mt-3" value={user.dest} onChange={evt => setUser({...user, dest: evt.target.value})} >
                  <option value="" disabled selected hidden>Destinations</option>
                  <option className="select-option" value="thiru">Thiruvananthapuram</option>
                  <option className="select-option" value="ernakulam">Ernakulam</option>
                  <option className="select-option" value="kozhi">Kozhikod</option>
                  <option className="select-option" value="waya">Wayanad</option>
                </select>
                <div className="row p-0 m-0 mt-3 justify-content-between align-items-center">
                  <div className="col-md-5 btn button-modal" onClick={submit}>SUBMIT</div>
                  <div className="col-md-5 btn button-modal" onClick={handleClose}>CANCEL</div>
                </div>
              </div>
            </div>  
        </Modal.Body>
        <Modal.Footer backdropClassName="modal-footer" />
      </Modal>
    )
}

export default RegisterModal;