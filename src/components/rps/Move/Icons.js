import React from "react";
import './Icons.css'

const Icons = ({ icon, alt, clr }) => {
    return (
        <div className="icon" style={{ border: `15px solid ${clr}` }}  >
            <img src={icon} alt={alt} className='mohre' />
        </div>
    )
}
export default Icons;