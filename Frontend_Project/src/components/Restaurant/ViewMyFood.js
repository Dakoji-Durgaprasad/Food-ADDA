import React from "react";

const ViewMyFood = () => {
    return(
        <>
        <div className="container border rounded my-5 py-5 shadow text-center ">
        <div className="header fs-1 text-center mb-5 bg-primary text-light rounded-top">
            MY FOODS 
            <div className="float-end fs-4  text-light my-3">
                <a href="restaurantpage.html"><button type="button" className="btn btn-outline-light mx-2 px-3">BACK</button></a>
            </div>
            
        </div>
        <table className="table">
            <thead>
              <tr>
                <th scope="col">Food</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065_1280.jpg"  className="rounded" height="120px" width="150px"/></td>
                <td>Pot Biryani</td>
                <td>We have taste biryani with different styles.</td>
                <td>Chicken</td>
                <td>299</td>
                <td>
                    <div className="lg-rg mx-2 ">
                        <a href="updatemyfoods.html"><button type="button" className="btn btn-outline-warning mx-2 px-3">UPDATE</button></a>
                        <a href="viewmyfoods.html"><button type="button" className="btn btn-outline-danger mx-2 px-4">DELETE</button></a>
                    </div>
                </td>
              </tr>
              <tr>
                <td><img src="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065_1280.jpg" className="rounded" height="120px" width="150px"/></td>
                <td>Pot Biryani</td>
                <td>We have taste biryani with different styles.</td>
                <td>Chicken</td>
                <td>299</td>
                <td>
                    <div className="lg-rg mx-2 ">
                        <a href="updatemyfoods.html"><button type="button" className="btn btn-outline-warning mx-2 px-3">UPDATE</button></a>
                        <a href="viewmyfoods.html"><button type="button" className="btn btn-outline-danger mx-2 px-4">DELETE</button></a>
                    </div>
                </td>
              </tr>
              <tr>
                <td><img src="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065_1280.jpg" className="rounded" height="120px" width="150px"/></td>
                <td>Pot Biryani</td>
                <td>We have taste biryani with different styles.</td>
                <td>Chicken</td>
                <td>299</td>
                <td>
                    <div className="lg-rg mx-2 ">
                        <a href="updatemyfoods.html"><button type="button" className="btn btn-outline-warning mx-2 px-3">UPDATE</button></a>
                        <a href="viewmyfoods.html"><button type="button" className="btn btn-outline-danger mx-2 px-4">DELETE</button></a>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </>
    )
}

export default ViewMyFood;