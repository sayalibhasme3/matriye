import React from 'react';
import "./profilecontainer.css"
import {Link} from "react-router-dom" 
import MyProfile from './MyProfile';

const ProfileContainer=()=>{
    return(
         <div>
            <ul className='Profilecontainer'>
                <Link  to="/myprofile"><li className="profilenames">My Profile</li></Link>
                <Link  to="/projects"><li className="profilenames">Projects</li></Link>
                <Link  to="/document"><li className="profilenames">Document</li></Link>
            </ul>
            <MyProfile/>
         </div>
    );
}

export default ProfileContainer;