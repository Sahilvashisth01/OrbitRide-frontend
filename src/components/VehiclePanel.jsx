import React from 'react'


const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className="p-1 text-center w-[93%] absolute top-0 " onClick={()=>{
          props.setVehiclePanel(false)
        }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className="text-2xl font-semibold mb-5"> Choose a Vehicle</h3>


        <div onClick={()=>{
            props.setConfirmRidePanel(true)
            props.selectVehicle('car')
        }} className="flex w-full border-2 active:border-black mb-2 rounded-xl p-3  items-center justify-between">
          <img
            className="h-14"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          ></img>
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberGo{" "}
              <span>
                <i className="ri-user-line"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm"> 2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Afforadable,compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹{props.fare?.car || "-"}</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
            props.selectVehicle('motorcycle')
           
        }} className="flex w-full border-2 active:border-black mb-2 rounded-xl p-3  items-center justify-between"> 
          <img
            className="h-11"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjRAoYVgWlss_HyVwOUPTcZdzRvnPNNUg7w&s"
          ></img>
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Moto{" "}
              <span>
                <i className="ri-user-line"></i>1
              </span>
            </h4>
            <h5 className="font-medium text-sm"> 3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Afforadable,motorcycle rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹{props.fare?.motorcycle || "-"}</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
           props.selectVehicle('auto')
        }} className="flex w-full border-2 active:border-black mb-2 rounded-xl p-3  items-center justify-between">
          <img
            className="h-12"
            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"
          ></img>
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberAuto{" "}
              <span>
                <i className="ri-user-line"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-sm"> 4 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Afforadable,Auto rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹{props.fare?.auto || "-"  }</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
