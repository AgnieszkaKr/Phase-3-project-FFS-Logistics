import React from 'react';




function Review({box, addressFrom, addressTo, componentRef}) {

    //   const initialValuesFrom = {
    //     firstNameFrom:"",
    //     lastNameFrom:"",
    //     phoneNumberFrom: "",
    //     emailFrom:"",
    //     streetFrom: "",
    //     cityFrom: '',
    //     StateFrom: "",
    //     zipFrom: 0
    // }
    // const initialValuesTo = {
    //     firstNameTo:"",
    //     lastNameTo:"",
    //     phoneNumberTo: "",
    //     emailTo:"",
    //     streetTo: "",
    //     cityTo: '',
    //     StateTo: "",
    //     zipTo: 0
    // }
    // const initialValuesPackageDetails = {
    //     shippingMethod:"",
    //     dimensionL:"",
    //     dimensionW: "",
    //     dimensionH:"",
    //     weight: "",
    //     deliveryConfirmation: '',
    //     packageDeliveryConfirmation: "",
    // }



  return (
    <div ref={componentRef}>
    <h4>Where are you shipping from?</h4>
    <table className="table table-striped mx-auto">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" style={{width:"5%"}}>1</th>
            <td style={{width:"20%"}}>First Name</td>
            <td>{addressFrom.firstNameFrom}</td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td>Last Name</td>
            <td>{addressFrom.lastNameFrom}</td>
          </tr>

          <tr>
            <th scope="row">3</th>
            <td>Phone number</td>
            <td>{addressFrom.phoneNumberFrom}</td>
          </tr>

          <tr>
            <th scope="row">4</th>
            <td>Email</td>
            <td>{addressFrom.emailFrom}</td>
          </tr>

          <tr>
            <th scope="row">5</th>
            <td>Street</td>
            <td>{addressFrom.streetFrom}</td>
          </tr>

          <tr>
            <th scope="row">5</th>
            <td>City</td>
            <td>{addressFrom.cityFrom}</td>
          </tr>

          <tr>
            <th scope="row">6</th>
            <td>State</td>
            <td>{addressFrom.StateFrom}</td>
          </tr>

          <tr>
            <th scope="row">7</th>
            <td>Zip</td>
            <td>{addressFrom.zipFrom}</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <h4>Where are you shipping to? </h4>
      <table className="table table-striped">      
      <tbody>
          <tr>
            <th scope="row" style={{width:"5%"}}>8</th>
            <td style={{width:"20%"}}>First Name</td>
            <td>{addressTo.firstNameTo}</td>
          </tr>

          <tr>
            <th scope="row">9</th>
            <td>Last Name</td>
            <td>{addressTo.lastNameTo}</td>
          </tr>

          <tr>
            <th scope="row">10</th>
            <td>Phone number</td>
            <td>{addressTo.phoneNumberTo}</td>
          </tr>

          <tr>
            <th scope="row">11</th>
            <td>Email</td>
            <td>{addressTo.emailTo}</td>
          </tr>

          <tr>
            <th scope="row">12</th>
            <td>Street</td>
            <td>{addressTo.streetTo}</td>
          </tr>

          <tr>
            <th scope="row">13</th>
            <td>City</td>
            <td>{addressTo.cityTo}</td>
          </tr>

          <tr>
            <th scope="row">14</th>
            <td>State</td>
            <td>{addressTo.StateTo}</td>
          </tr>

          <tr>
            <th scope="row">15</th>
            <td>Zip</td>
            <td>{addressTo.zipTo}</td>
          </tr>
        </tbody>
      </table>
      <br></br> 
      <h4>Package details</h4>
      <table className="table table-striped">   
              
      <tbody>
          <tr>
            <th scope="row">16</th>
            <td style={{width:"20%"}}>Shipping method</td>
            <td>{box.shippingMethod}</td>
          </tr>

          <tr>
            <th scope="row" style={{width:"5%"}}>17</th>
            <td>Length</td>
            <td>{box.dimensionL}</td>
          </tr>

          <tr>
            <th scope="row">18</th>
            <td>Width</td>
            <td>{box.dimensionW}</td>
          </tr>

          <tr>
            <th scope="row">19</th>
            <td>Height</td>
            <td>{box.dimensionH}</td>
          </tr>

          <tr>
            <th scope="row">20</th>
            <td>Weight</td>
            <td>{box.weight}</td>
          </tr>

          <tr>
            <th scope="row">21</th>
            <td>Delivery confirmation</td>
            <td>{box.deliveryConfirmation}</td>
          </tr>

          <tr>
            <th scope="row">22</th>
            <td>Proof of delivery (Recipient's signature)</td>
            <td>{box.packageDeliveryConfirmation}</td>
          </tr>
        </tbody>
      </table>
      <br></br>
    </div>

  )
}

export default Review