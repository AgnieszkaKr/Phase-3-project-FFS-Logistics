import React from 'react'


function PackageInfo({setBox, box}) {
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
    <div classNameName="d-flex justify-content-center" >
    <form classNameName="row">
            <div className="col-md-5">
              <select  className="form-select" name="shippingMethod" value={box.shippingMethod} onChange={(e) => setBox({...box, [e.target.name]:e.target.value})}>
                <option value=""></option>
                <option value="Very Slow">Very Slow</option>
                <option value="Slow">Slow</option>
                <option value="Fast">Fast</option>
                <option value="Fast & Furious">Fast & Furious</option>
              </select>
              <label className="form-label">Shipping method</label>
            </div>
            <div className="row"></div>
            <div className="col-md-5">
              <label className="form-label">Dimension</label>

            </div>
            <div className="row"></div>
            <div className="col-md-1">
              <input type="number" className="form-control" name="dimensionL" value={box.dimensionL} onChange={(e) => setBox({...box, [e.target.name]:e.target.value})}/>
              <label className="form-label">L (inch)</label>
            </div>
            <div className="col-md-1">
              <input type="number" className="form-control" name="dimensionW" value={box.dimensionW} onChange={(e) => setBox({...box, [e.target.name]:e.target.value})}/>
              <label className="form-label">W (inch)</label>
            </div>
            <div className="col-md-1">
              <input type="number" className="form-control" name="dimensionH" value={box.dimensionH} onChange={(e) => setBox({...box, [e.target.name]:e.target.value})}/>
              <label className="form-label">H (inch)</label>
              
            </div>
            <div className="row"></div>
            <div className="col-5">
              <input type="number" className="form-control" name="weight" value={box.weight} onChange={(e) => setBox({...box, [e.target.name]:e.target.value})}/>
              <label className="form-label">Weight (Pound)</label>
            </div>
            <div className="row"></div>
            <div className="col-lg-5">
              <select id="" className="form-select" name="deliveryConfirmation" value={box.deliveryConfirmation} onChange={(e) => setBox({...box, [e.target.name]:e.target.value})}>
                <option value=""></option>
                <option value="Email">Email</option>
                <option value="SMS">SMS</option>
              </select>
              <label className="form-label">Delivery confirmation</label>
            </div>            
            <div className="row"></div>
            <div className="col-md-5">
              <select  id="" className="form-select" name="packageDeliveryConfirmation" value={box.packageDeliveryConfirmation} onChange={(e) => setBox({...box, [e.target.name]:e.target.value})}>
                <option value=""></option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
              <label className="form-label">Proof of delivery (Recipient's signature)</label>            
            </div>
        </form>
        </div>

  )
}

export default PackageInfo