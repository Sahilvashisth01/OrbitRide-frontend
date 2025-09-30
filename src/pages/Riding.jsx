import React from "react";
import { Link,useLocation } from "react-router-dom";
import { useEffect,useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";
import LiveTracking from "../components/LiveTracking";
const Riding = (props) => {
  const location=useLocation();
  const {ride}=location.state || {};
  const{socket}=useContext(SocketContext);
  const navigate=useNavigate();


socket.on('ride-ended',()=>{
  navigate('/home');
});
  
  return (
    <div className="h-screen">
      <Link to="/home" className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className=" text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
       <LiveTracking />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img className="h-12" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
          <div className="text-right">
            <h2 className="text-lg font-medium capitalize">{ride?.captain?.fullname?.firstname+" "+ride?.captain?.fullname?.lastname}</h2>
            <p className="text-xl  -mt-1 -mb-1">{ride?.vehicleType}</p>
            <p className="text-sm text-gray-600">Suzuki Dzire</p>
          </div>
        </div>
        <div className="folex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-5">
           
            <div className="flex items-center gap-5 p-3 border-b-1">
              <i className="ri-map-pin-user-fill"></i>
              <div>
                
                <p className="text-sm text-bold -mt-1 text-gray-600">{ride?.destination}</p>
              </div> 
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹{ride?.fare} </h3>
                <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Make a payment</button>
      </div>
    </div>
  );
};

export default Riding;
