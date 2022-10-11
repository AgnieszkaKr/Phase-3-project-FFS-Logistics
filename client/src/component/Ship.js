import React, {useState, useRef, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';

import AddressFrom from './Shipping/AddressFrom'
import AddressTo from './Shipping/AddressTo'
import PackageInfo from './Shipping/PackageInfo'
import Review from './Shipping/Review'

function Ship() {
    const[step, setStep]=useState(0)
    const steps = ["Where are you shipping from?", "Where are you shipping to?", "Package details", "Review information"]
    const handlePrevious =()=>{
        if (step > 0){
            setStep(step-1)  
        }  
    }

    const handleNext =()=>{
        if(step===0 && addressFrom.firstNameFrom && addressFrom.lastNameFrom && addressFrom.phoneNumberFrom && addressFrom.emailFrom
            && addressFrom.streetFrom && addressFrom.cityFrom && addressFrom.StateFrom && addressFrom.zipFrom){
            if (step <= steps.length  ){
            setStep(step+1)}
        }
        if(step ===1 && addressTo.firstNameTo && addressTo.lastNameTo && addressTo.phoneNumberTo && addressTo.emailTo && addressTo.streetTo &&addressTo.cityTo && addressTo.StateTo && addressTo.zipTo){
            if (step <= steps.length  ){
            setStep(step+1)}
        }
        if(step === 2 && box.shippingMethod && box.dimensionL && box.dimensionW && box.dimensionH && box.weight && box.deliveryConfirmation && box.packageDeliveryConfirmation ){
            if (step <= steps.length  ){
            setStep(step+1)}
        } 
        if (step ===3) {
            setStep(step+1)}
    }
    const returnStep =() =>{
        if (step === 0){
            return <AddressFrom setAddressFrom={setAddressFrom} addressFrom={addressFrom}/>
        } else if (step=== 1){
            return <AddressTo setAddressTo={setAddressTo} addressTo={addressTo}/>
        } else if (step === 2){
            return <PackageInfo setBox={setBox} box={box} />
        } else {
            return <Review box={box} addressFrom={addressFrom} addressTo={addressTo} componentRef={componentRef} />
        }
    }
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => (componentRef.current)

    })
    

    const initialValuesFrom = {
        firstNameFrom:"",
        lastNameFrom:"",
        phoneNumberFrom: "",
        emailFrom:"",
        streetFrom: "",
        cityFrom: '',
        StateFrom: "",
        zipFrom: null
    }
    const initialValuesTo = {
        firstNameTo:"",
        lastNameTo:"",
        phoneNumberTo: "",
        emailTo:"",
        streetTo: "",
        cityTo: '',
        StateTo: "",
        zipTo: null
    }
    const initialValuesPackageDetails = {
        shippingMethod:"",
        dimensionL:"",
        dimensionW: "",
        dimensionH:"",
        weight: "",
        deliveryConfirmation: '',
        packageDeliveryConfirmation: "",
    }
    const[addressFrom, setAddressFrom]=useState(initialValuesFrom)
    const[addressTo, setAddressTo]=useState(initialValuesTo)
    const[box, setBox]=useState(initialValuesPackageDetails)
    const[shipped, setShipped]=useState(false)

    
    const sendPackage = ()=>{
        setShipped(true)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
        
  
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

 



    return (
    <div className="form" style={{margin:"5%"}}>
        <div className="progressBar"></div>
        <div className="form-container">
            <div className="header">

            { shipped ? 
            (   <>
                <div className="d-flex justify-content-center">
                    <h4> You just shipped your package!</h4>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary form-control" onClick={handlePrint} style={{width:"12%", margin:'3%', backgroundColor:"green"}}>Print confirmation</button>
                </div>
                <div className="d-flex justify-content-center">
                    <img style={{width:'40%'}} src='../../Logo.jpg'/>
                </div>
                
                </>
            ):( <>             
                <h1 style={{textAlign:'Center', marginBottom:"3%"}}>{steps[step]}</h1>
                </>)}
                {returnStep()}
            </div>

                {(step === (steps.length - 1)) ?(
                    <> 
                        <div className="form"></div>
                        <div className="footer" style={{display:"inline"}}>
                            {shipped ? 
                            (null):(
                                <><button className="btn btn-primary form-control" onClick={handlePrevious} disabled={step <= 0} style={{width:"12%", margin:'3%', }}>Return to form</button>
                                <button className="btn btn-primary form-control" onClick={sendPackage}  style={{width:"12%", margin:'3%', float:"right"}}>Send package</button> 
                                </>
                            )}                      
                        </div>
                    </>
                ):( <>
                        <div className="form"></div>
                        <div className="footer" style={{display:"flex", justifyContent:"center"}}>
                            <button className="btn btn-primary form-control"onClick={handlePrevious} disabled={step <= 0 } style={{width:"10%", margin:'3%'}}>Back</button>
                            <button className="btn btn-primary form-control"onClick= {handleNext} disabled={step >= steps.length-1} style={{width:"10%" , margin:'3%'}}>Next</button>
                        </div>
        
                    </>
                )}             
            </div>
        </div>


  )
}

export default Ship