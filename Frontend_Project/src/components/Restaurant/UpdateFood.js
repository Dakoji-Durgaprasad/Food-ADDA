import React from "react";

const UpdateFood = () => {
  return (
    <>
      <div className="header fs-2 text-center mb-5 bg-primary text-light rounded-top py-2 ">
        UPDATE FOOD DETAILS
        <div className="float-end fs-4  text-light my-3 mb-5">
          <a href="restaurantpage.html">
            <button type="button" className="btn btn-outline-light mx-2 px-3 ">
              BACK
            </button>
          </a>
        </div>
      </div>
      <div className="container border rounded mx-5 my-5  shadow text-center row">
        <div className="container border rounded mx-2 my-5 py-5 px-1 shadow text-center col">
          <form className="px-5">
            <div className="header fs-2 text-center mb-5 bg-primary text-light rounded-top">
              UPDATE DETAILS
            </div>
            <div className="row">
              <div className="mb-3 col">
                <input
                  type="text"
                  className="form-control"
                  id="addfood"
                  placeholder="Enter Food Title"
                  aria-describedby="textHelp"
                />
              </div>
              <div className="mb-3 col">
                <textarea
                  className="form-control"
                  id="Textarea"
                  rows="3"
                  placeholder="Enter Food Description..."
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col">
                <select
                  className="form-select form-select-md mb-3"
                  aria-label="Large select example"
                >
                  <option selected>Select Category</option>
                  <option value="1">Biryani</option>
                  <option value="2">Veg</option>
                  <option value="3">Tiffins</option>
                </select>
              </div>
              <div className="mb-3 col">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Food Price"
                  aria-describedby="textHelp"
                />
              </div>
            </div>
            <div className="lg-rg mx-2 mt-5">
              <a href="updatemyfoods.html">
                <button type="button" className="btn btn-outline-primary mx-2 px-3">
                  ADD
                </button>
              </a>
              <a href="restaurantpage.html">
                <button type="button" className="btn btn-outline-danger mx-2 px-4">
                  EXIT
                </button>
              </a>
            </div>
          </form>
        </div>

        <div className="container border rounded my-5 mx-2 py-5 shadow text-center col">
          <form className="px-2 ">
            <div className="header fs-2 text-center mb-5 bg-primary text-light rounded-top">
              UPDATE IMAGES
            </div>
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                aria-label="file example"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                aria-label="file example"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                aria-label="file example"
                required
              />
            </div>
            <div className="lg-rg mx-2 mt-5">
              <a href="updatemyfoods.html">
                <button type="button" className="btn btn-outline-primary mx-2 px-3">
                  ADD
                </button>
              </a>
              <a href="restaurantpage.html">
                <button type="button" className="btn btn-outline-danger mx-2 px-4">
                  EXIT
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default UpdateFood;
