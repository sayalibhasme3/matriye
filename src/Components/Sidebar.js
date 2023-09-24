import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./sidebar.css"
import Matrye_logo from "../Images/Matrye_logo.PNG"
import girl_img from "../Images/girl_img.PNG"
import {Link} from "react-router-dom";

const Sidebar=()=>{
    return(
        <div className="sidebar">
        <div className="img">    
        <Link className="routelinks" to="/"><img className="Matrye" alt="Matrye" src={Matrye_logo}/></Link>
         <img className="girl" alt="girl" src={girl_img}/>
         <h3 style={{padding: "1rem 0"}}>Jheel Kaur</h3>
         <h6>Student</h6>
         </div>
         <div>
            <ul className="mainlist">
                <Link className="routelinks" to="/"><li className="listnames">Dashboard</li></Link>
                <Link className="routelinks" to="/profile"><li className="listnames">Profile</li></Link>
                <li className="listnames">Document</li>
                <li className="listnames">My Cources</li>
                <li className="listnames">Payment History</li>
                <li className="listnames">Notificatons</li>
                <li className="listnames">Raise a Ticket</li>
                <li className="listnames">Apply for leave</li>
            </ul>
         </div>
        </div>
    );
}

export default Sidebar;