import React from "react";

export default function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);

  return (
    <div className="container">
      <div>
        <div className="card m-2" style={{height:"290px" , width: "18rem" , boxShadow:"5px 5px 5px gray"}}>
          {/* <img src= {process.env.PUBLIC_URL+'/paneer_chilli.jpeg'} alt="paneer chilli"/> */}
          <img
            src={props.imgSrc}
            alt="paneer chilli"
            style={{ height: "170px" , objectFit:"fill"}}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            {/* <p className="card-text">{props.foodDescription}</p> */}
            <div className="container w-100" style={{padding:0}}>
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
                {priceOptions &&
                  priceOptions.map((option) => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  })}
              </select>
              <p className="d-inline h-100 fs-5">Price : 100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
