import React, { useState } from 'react';
import RegisterModal from './add-user';

function App() {
  const [viewModal, setViewModal] = useState(true);
  return (
    <div>
      <div className="row m-0 p-0 header align-items-center">
        <div className="h3 row col-md-2 ml-3 m-0 p-0 justify-content-center">
          <b>TRIPWIZ</b>
        </div>
        <div className="col-md row justify-content-end">
          <div className="mr-3">Experiences</div>
          <div className="mr-3">Questions</div>
          <div className="button-red pl-3 pr-3" onClick={()=> setViewModal(true)}>SIGN IN</div>
        </div>
        <div className="col-md-1" />
      </div>
      <div className="col-md-12 row adventures p-0 m-0 align-items-center text-white">
        <div className="col-md-1"/>
        <div className="h1 col-md-5 justify-content-end text-right">
         <b>DISCOVER NEW ADVENTURES</b> 
         <div className="bottom-stroke"></div>
        </div>
        <div className="col-md-3 text-white">
          <p>
            We offer you a totally flexible and personal service so you can experience Kerala and Tamil Nadu in your
            way. Take a glimpse at tours we offer - for you to get inspired
          </p>
          <p>
            All of our sample tools must be customized to suit your personal preferences. Or you can request your own
            personal Tour.
          </p>
        </div>
        <div className="col-md-3"/>
      </div>
      <div className="col-md-12 row trip p-0 m-0">
        <div className="col-md-2" />
        <img className="col-md-4" src="/assets/image.png" alt="" />
        <div className="col-md-4 pr-0 text">
          <div>
            <b>HERE WE GO</b>
          </div>
          <div className="body mb-3">
            We'll design complete iterary for you. <br/>
            From Suggesting our favourite places that we are sure you'd love and the sights you shouldn't miss, we are at
            our service, throughot. We will back your accomidation and transport, and are happy to drive you anywhere you want.  
          </div>
          <div>
            <span className="button-red-bottom p-3">CUSTOMIZE MY TRIP</span>
          </div>
        </div>
      </div>
      <div className="row m-0 p-0 footer align-items-center">
        <div className="col-md-1" />
        <div>Copyright &copy; 2010-2017 Tripwiz</div>
      </div>
      <RegisterModal show={viewModal} closeModal={(boolean) => setViewModal(boolean)} />
    </div>
  );
}

export default App;
