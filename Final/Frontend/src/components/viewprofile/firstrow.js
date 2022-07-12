import React from "react";
import "./firstrow.css";

export const Firstrow = () => {
  return (
    <>
      <div className="container-fluid px-5 py-5">
        <div className="row gx-5">
          {/* left column */}
          <div className="col-lg-8 col-12 leftcolumn">
            <div
              id="carouselExampleIndicators"
              className="carousel slide "
              data-bs-ride="true"
            >
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
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_1280.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_1280.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg"
                    className="img-fluid"
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
          {/* end of left column */}

          {/* right column */}
          <div className="col-lg-4 col-12">
            <div className="row">
              <div className="col-12 righttop">
                <h3 id="toptext">Selling Price :</h3>
                <h2 id="price">₹ 10,000</h2>
                <br></br>

                <div>
                  <p id="posted">Posted by : </p>
                  <h5 id="sellername">Random Name</h5>
                </div>
              </div>

              <div className="col-12 rightbottom">

            
                <h3 id="toptext">Seller Description :</h3>
                <h5 id="sellername">Random Name</h5>
                <div id="imgcontainer">
                {/* <img id="profileimg" className="" src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_1280.jpg" alt="Profile img"></img> */}
                </div>

                <div class="d-grid gap-2 chatbutton">
                  <button class="btn btn-primary buttontext" type="button">
                    Chat with Seller
                  </button>                  
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
