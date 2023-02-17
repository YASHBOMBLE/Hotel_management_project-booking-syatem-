import React, { useState } from 'react';
import './PopupAlert.css';

function PopupAlert() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div> 
        <div className='row'>
            <div className='col-md-12'>
    <div className="popup-alert-container">
        <div className='d-grid gap-2'>
        <button className='btn btn-primary' onClick={() => setShowPopup(!showPopup)}>Add Food item</button>
        </div>
     
      {showPopup && (
        <div className="popup-alert">
          <div>
            <h1>
                Hello 
            </h1>
            </div>
          <button onClick={() => setShowPopup(false)}>Close</button>
          <button onClick={() => setShowPopup(false)} className="m-1">Add</button>
        </div>
      )}
      </div>
    </div>
    </div>
    </div>
  );
}

export default PopupAlert;
