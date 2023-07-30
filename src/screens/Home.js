import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [foodItems, setFoodItems] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [search, setSearch] = useState("");

  const handleFoodData = async () => {
    let response = await fetch("http://localhost:5000/api/getallfooditems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let responseJson = await response.json();
    setFoodItems(responseJson[0]);
    setFoodCategories(responseJson[1]);
  };

  useEffect(() => {
    handleFoodData();
  }, []);

  

  return (
    <div>
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-caption" style={{ zIndex: 10 }}>
            <div className="form-inline justify-content-center">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search in Konoha Food Court"
                aria-label="Search"
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
              />
              {/* <button className="btn btn-danger m-2" type="submit">
                Search
              </button> */}
            </div>
          </div>
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner" style={{ maxHeight: "500px" }}>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/600x450/?food"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/600x450/?cake"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/600x450/?paneer"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {foodCategories &&
          foodCategories.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItems &&
                  foodItems
                    .filter((item) => {
                      return (item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()));
                    })
                    .map((filteredItem) => {
                      return (
                        <div
                          key={filteredItem._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                            foodName={filteredItem.name}
                            foodDescription={filteredItem.description}
                            imgSrc={filteredItem.img}
                            options={filteredItem.options[0]}
                          />
                        </div>
                      );
                    })}
              </div>
            );
          })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
