import React from 'react'
import states from 'states-us'

function AddressTo({setAddressTo, addressTo}) {
  // const initialValuesTo = {
  //       firstNameTo:"",
  //       lastNameTo:"",
  //       phoneNumberTo: "",
  //       emailTo:"",
  //       streetTo: "",
  //       cityTo: '',
  //       StateTo: "",
  //       zipTo: 0
  //   }

  return (
        <div className="d-flex justify-content-center">
    <form class="row">
            <div class="col-md-5 ">
              <input type="text" class="form-control" name="firstNameTo"   value={addressTo.firstNameTo} onChange={(e) => setAddressTo({...addressTo, [e.target.name]:e.target.value})}/>
              <label class="form-label">First Name</label>
            </div>
            <div></div>
            <div class="col-md-5">
              <input type="text" class="form-control" name="lastNameTo"   value={addressTo.lastNameTo} onChange={(e) => setAddressTo({...addressTo, [e.target.name]:e.target.value})}/>
              <label class="form-label">Last Name</label>
            </div>
            <div></div>
            <div class="col-5">
              <input type="integer" maxLength="5" class="form-control" name="phoneNumberTo"   value={addressTo.phoneNumberTo} onChange={(e) => setAddressTo({...addressTo, [e.target.name]:e.target.value})}/>
              <label class="form-label">Phone number</label>
            </div>
            <div class="row"></div>
            <div class="col-lg-5">
              <input type="email" class="form-control" name="emailTo"   value={addressTo.emailTo} onChange={(e) => setAddressTo({...addressTo, [e.target.name]:e.target.value})}/>
              <label class="form-label">Email</label>
            </div>            
            <div class="row"></div>
            <div class="col-md-5">
              <input type="text" class="form-control" name="streetTo"   value={addressTo.streetTo} onChange={(e) => setAddressTo({...addressTo, [e.target.name]:e.target.value})}/>
              <label class="form-label">Street</label>              
            </div>
            <div class="row"></div>
            <div class="col-lg-5">
              <input type="text" class="form-control" name="cityTo"   value={addressTo.cityTo} onChange={(e) => setAddressTo({...addressTo, [e.target.name]:e.target.value})}/>
              <label class="form-label">City</label>
            </div>
            <div class="row"></div>
            <div class="col-md-2">
              <select  id="" class="form-select" name="StateTo"   value={addressTo.StateTo} onChange={(e) => setAddressTo({...addressTo, [e.target.name]:e.target.value})}>
                <option value=""></option>
                {states.map(state => (
                  <option value={state.name}>{state.name}</option>
                ))}
              </select>
              <label class="form-label">State</label>
            </div>
            <div class="col-md-2">
              <input maxlength="5"  class="form-control" name="zipTo"   value={addressTo.zipTo} onChange={(e) => setAddressTo({...addressTo, [e.target.name]:e.target.value})}/>
              <label class="form-label" >Zip</label>
            </div>
        </form>
        </div>
  )
}

export default AddressTo