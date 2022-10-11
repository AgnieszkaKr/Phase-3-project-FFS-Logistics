import { MdOutlineArrowDropDownCircle } from 'react-icons/md';
import React from 'react'


const Header = ({openChat}) => {



    return (

        <div className="d-flex flex-row justify-content-between p-3 adiv text-white">
           
            <i className="fas fa-chevron-left"><MdOutlineArrowDropDownCircle className='dropdown-header'  onClick={openChat}/></i>
            
            <span className="pb-3">Chat</span>
            <i className="fas fa-times"></i>
            
        </div>
    )
}


export default Header