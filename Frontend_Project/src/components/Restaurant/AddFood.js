import React from "react";

const AddFood = () => {
    return(
        <>
        <div className="container border rounded my-5 py-5 shadow text-center ">
        <form className="px-5">
            <div className="header fs-1 text-center mb-5 bg-primary text-light rounded-top">
                ADD FOOD
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <input type="text" className="form-control" id="addfood" placeholder="Enter Food Title"
                        aria-describedby="textHelp"/>
                </div>
                <div className="mb-3 col">
                    <textarea className="form-control" id="Textarea" rows="3"
                        placeholder="Enter Food Description..."></textarea>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <select className="form-select form-select-md mb-3" aria-label="Large select example">
                        <option selected>Select Category</option>
                        <option value="1">Biryani</option>
                        <option value="2">Veg</option>
                        <option value="3">Tiffins</option>
                    </select>
                </div>
                <div className="mb-3 col">
                    <input type="number" className="form-control" placeholder="Enter Food Price"
                        aria-describedby="textHelp"/>
                </div>
            </div>
            <div className="row">
                <label  className="form-label mb-4 fs-4">Upload Food Images</label>
                <div className="mb-3 col">
                    
                    <input type="file" className="form-control" aria-label="file example"  required/>
                </div>
                <div className="mb-3 col">
                    <input type="file" className="form-control" aria-label="file example" required/>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col-md-6">
                    <input type="file" className="form-control" aria-label="file example" required/>
                </div>
            </div>
            <div className="lg-rg mx-2 mt-5">
                <a href="addfood.html"><button type="button"
                        className="btn btn-outline-primary mx-2 px-3">ADD</button></a>
                <a href="restaurantpage.html"><button type="button"
                        className="btn btn-outline-danger mx-2 px-4">EXIT</button></a>
            </div>
        </form>
        </div>
        </>
    )
}

export default AddFood;