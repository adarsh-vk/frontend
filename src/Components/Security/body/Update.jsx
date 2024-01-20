import React from "react";
import "./Update.css";

const Update = () => {
  return (
    <div className="update">
      <div className="container1">
      <div className="available"><b>Available Slots</b></div>
        <div className="parking-info">
         
          <div className="vehicle-type">Car</div>
          <div className="available-slots">9</div>

          <div className="vehicle-type">Motorcycle</div>
          <div className="available-slots">8</div>
        </div>
      </div>
      <div className="parking-div">
        <div className="parking-div-sub1">
          <h3>Parking Management</h3>
        </div>

        <div className="parking-div-sub2">
          <label for="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter Phone Number"
          />

          <label for="vehicle">User Name:</label>
          <input
            type="text"
            id="vehicle"
            name="username"
            placeholder="Enter User Name"
          />

          <div className="button-container">
            <button className="check-in" onclick="checkIn()">
              Check-In
            </button>
            <button className="check-out" onclick="checkOut()">
              Check-Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
