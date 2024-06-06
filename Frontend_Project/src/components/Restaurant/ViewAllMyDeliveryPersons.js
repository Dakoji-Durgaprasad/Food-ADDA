import React from "react";

const ViewAllMyDeliveryPersons = () => {
    return(
        <div class="container border rounded my-5 py-5 shadow text-center ">
        <div class="header fs-1 text-center mb-5 bg-primary text-light rounded-top">
            ALL DELIVERY PERSONS 
            <div class="float-end fs-4  text-light my-3">
                <a href="restaurantpage.html"><button type="button" class="btn btn-outline-light mx-2 px-3">BACK</button></a>
            </div>
            
        </div>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Phone No </th>
                <th scope="col">Address </th>
                <th scope="col">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Delivery Person-1</td>
                <td>Delivery Person-1</td>
                <td>deliveryperson1@gmail.com</td>
                <td>8794278</td>
                <td>Street, City, Pincode</td>
                <td>
                    <div class="lg-rg mx-2 ">
                        <a href="viewallresdeliveryper.html"><button type="button" class="btn btn-outline-danger mx-2 px-4">DELETE</button></a>
                    </div>
                </td>
              </tr>
              <tr>
                <td>Delivery Person-2</td>
                <td>Delivery Person-2</td>
                <td>deliveryperson2@gmail.com</td>
                <td>8794278</td>
                <td>Street, City, Pincode</td>
                <td>
                    <div class="lg-rg mx-2 ">
                        <a href="viewallresdeliveryper.html"><button type="button" class="btn btn-outline-danger mx-2 px-4">DELETE</button></a>
                    </div>
                </td>
              </tr>
              <tr>
                <td>Delivery Person-3</td>
                <td>Delivery Person-3</td>
                <td>deliveryperson3@gmail.com</td>
                <td>8794278</td>
                <td>Street, City, Pincode</td>
                <td>
                    <div class="lg-rg mx-2 ">
                        <a href="viewallresdeliveryper.html"><button type="button" class="btn btn-outline-danger mx-2 px-4">DELETE</button></a>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
    </div>
    )
}

export default ViewAllMyDeliveryPersons;