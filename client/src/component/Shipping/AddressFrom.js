import React from 'react'
import states from 'states-us'

function AddressFrom({setAddressFrom, addressFrom}) {
    // const initialValuesFrom = {
    //     firstNameFrom:"",
    //     lastNameFrom:"",
    //     phoneNumberFrom: "",
    //     emailFrom:"",
    //     streetFrom: "",
    //     cityFrom: '',
    //     StateFrom: "",
    //     zipFrom: 0
    // }

            

  return (
    <div >
    <form className="row">
            
            <div className="col-md-5">
              <input type="text" className="form-control" name="firstNameFrom" value={addressFrom.firstNameFrom} onChange={(e) => setAddressFrom({...addressFrom, [e.target.name]:e.target.value})} required/>
              <label className="form-label">First Name</label>
            </div>
            <div></div>
            <div className="col-md-5">
              <input type="text" className="form-control" name="lastNameFrom" value={addressFrom.lastNameFrom} onChange={(e) => setAddressFrom({...addressFrom, [e.target.name]:e.target.value})} required/>
              <label className="form-label">Last Name</label>
              <br></br>
              <br></br>
            </div>
            <div></div>
            <div className="col-5">
              <input type="tel" 
           className="form-control" name="phoneNumberFrom" value={addressFrom.phoneNumberFrom} onChange={(e) => setAddressFrom({...addressFrom, [e.target.name]:e.target.value})} required/>
              <label className="form-label">Phone number</label>
            </div>
            <div></div>
            <div className="row"></div>
            <div className="col-lg-5">
              <input type="email" className="form-control" name="emailFrom" value={addressFrom.emailFrom} onChange={(e) => setAddressFrom({...addressFrom, [e.target.name]:e.target.value})} required/>
              <label className="form-label">Email</label>
            </div>            
            <div></div>
            <div className="col-md-5">
              <input type="text" className="form-control" name="streetFrom"value={addressFrom.streetFrom} onChange={(e) => setAddressFrom({...addressFrom, [e.target.name]:e.target.value})} required/>
              <label className="form-label">Street</label>              
            </div>
            <div></div>
            <div className="col-lg-5">
              <input type="text" className="form-control" name="cityFrom" value={addressFrom.cityFrom} onChange={(e) => setAddressFrom({...addressFrom, [e.target.name]:e.target.value})} required/>
              <label className="form-label">City</label>
            </div>
            <div></div>
            <div className="row"></div>
            <div className="col-md-4">
              <select id="" className="form-select" name="StateFrom" value={addressFrom.StateFrom} onChange={(e) => setAddressFrom({...addressFrom, [e.target.name]:e.target.value})} >
                <option value=""></option>
                {states.map(state => (
                  <option value={state.name}>{state.name}</option>
                ))}
              </select>
              <label className="form-label">State</label>
            </div>
            <div></div>
            <div className="col-md-4">
              <input maxlength="5"  className="form-control" name="zipFrom" value={addressFrom.zipFrom} onChange={(e) => setAddressFrom({...addressFrom, [e.target.name]:e.target.value})} required/>
              <label className="form-label" >Zip</label>
            </div>
        </form>
        </div>
        
  )
}

export default AddressFrom