import React from "react";

const LookingForDriver = (props) => {
  return (
    <div className="relative">
      <h5
        className="absolute top-4 left-4 text-3xl text-gray-200 cursor-pointer z-20"
        
        onClick={() => {
          props.setVehicleFound(false);
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>

      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20 "
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
        ></img>
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>

              <h5 >{props.pickup}</h5>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className="ri-map-pin-line"></i>
            <div>
              <h5>{props.destination}</h5>
              
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-cash-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.fare?.[props.vehicleType] ?? "N/A"}</h3>
              <p className="text-sm -mt-1 text-gray-600 ">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
