import React from "react";

const RegisterDeliveryPerson = () => {
    return(
      <div class="container border rounded my-5 py-5 shadow text-center ">
      <form class="px-5">
          <div class="header fs-1 text-center mb-5 bg-primary text-light rounded-top">
              REGISTER
          </div>
          <div class="row mb-4">
              <div class="col">
                <input type="text" class="form-control" placeholder="Enter Your First name" aria-label="First name" required/>
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Enter Your Last name" aria-label="Last name" required/>
              </div>
          </div>
          <div class="row mb-4">
              <div class="col">
                <input type="text" class="form-control" placeholder="Enter Your Email-Id" aria-label="Email-Id" required/>
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Enter Your Phone Number" aria-label="Phone Number" required/>
              </div>
          </div>
          <div class="header fs-4 mb-3 text-left">
              ADDRESS
          </div>
          <div class="row mb-4">
              <div class="col">
                <input type="text" class="form-control" placeholder="Enter Your Street" aria-label="Street" required/>
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Enter Your City" aria-label="City" required/>
              </div>
          </div>
          <div class="row mb-4">
              <div class="col">
                <input type="text" class="form-control" placeholder="Enter Your Pin Code" aria-label="Pin Code" required/>
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Enter Your Password" aria-label="Password" required/>
              </div>
          </div> 
          <div class="lg-rg mx-2 mt-5">
              <a href="deliverypersonregister.html"><button type="button" class="btn btn-outline-primary mx-2 px-5">REGISTER</button></a>
              <a href="restaurantpage.html"><button type="button" class="btn btn-outline-danger mx-2 px-5">EXIT</button></a>
          </div>
      </form>
    </div>
    )
}

export default RegisterDeliveryPerson;