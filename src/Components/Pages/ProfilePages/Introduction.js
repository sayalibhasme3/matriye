import React from 'react';
import "./introduction.css"
import girl_img from "../../../Images/girl_img.PNG"
import drawpen from "../../../Images/drawpen.PNG"


const Introduction = ({ Introduction }) => {
    console.log(Introduction)
    return (
        <div className="Introcontainer">
            <div><img src={girl_img} alt='girlimg'/></div>
            <div className='first'>
                <div style={{fontSize: "1.2rem", fontWeight:"bold"}}>{Introduction.name}</div>
                <div>{Introduction.designation}</div>
                <div><label>Student ID : </label>{Introduction.studentID}</div>
                <div><label>Date Of Joining : </label>{Introduction.DOJ}</div>
                <div><button style={{color:"White", backgroundColor:"#070a2b", padding:"0.6rem", border:"none", borderRadius:"10%"}}>Send Message</button></div>
            </div>
            <div style={{width:"0.1rem", height:"9rem",backgroundColor:"#ffffff"}}></div>
            <div className='second'> 
                <div><label>Phone</label><span className='label'>:</span>{Introduction.phone}</div>
                <div><label>Email</label><span>:</span>{Introduction.Email}</div>
                <div><label>Birthday</label><span>:</span>{Introduction.Birthday}</div>
                <div><label>Adress</label><span>:</span>{Introduction.Adress}</div>
                <div><label>Gender</label><span>:</span>{Introduction.Gender}</div>
                <div><label>Reports to</label><span>:</span>{Introduction.ReportsTo}</div>
            </div>
            <div><img style={{width:"2.5rem"}} src={drawpen} alt='drawpen'/></div>
        </div>
    );
}

export default Introduction;

// {
//     profiledetails.map((val)=>(val.name))
//  }