import React from "react";
import MessageBox from "./messagebox/MessageBox";
import UncontrolledExample from "./Carousel";
import BasicExample from "./Cards";


const Home = () => {
  return (
    <>
    <div className="home-main">
        <div >
            <div className="carousel-container">
                <UncontrolledExample />
               
            </div>
        </div>
        <div >
          <div className="card-container">
            <BasicExample/>
            <BasicExample/>
            <BasicExample/>
          </div>
        </div>
    </div>






  </>

  )
}

export default Home;