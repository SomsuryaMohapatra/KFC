import React from "react"

export default function Card() {
  return (
    <div>
      <div>
        <div className="card m-3" style={{ width: "20rem" , borderRadius:"10px"}}>
          <img src= {process.env.PUBLIC_URL+'/paneer_chilli.jpeg'} alt="paneer chilli"/>
          <div className="card-body">
            <h5 className="card-title">Menu Item Name</h5>
            <p className="card-text">Menu Item Description</p>
            <div className="container w-100">
              <select className="m-2 bg-danger h-100 rounded">
                {Array.from(Array(5), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 bg-danger h-100 rounded">
                <option key="half" value="half">
                  Half
                </option>
                <option key="full" value="full">
                  Full
                </option>
              </select>
              <p className="d-inline h-100 fs-5">Total Price : 100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
