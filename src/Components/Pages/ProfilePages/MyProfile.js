import React from 'react';
import PersonalInfo from "../MyProfilePages/PersonalInfo";
import Emecontact from '../MyProfilePages/EmeContact';
import BankInfo from '../MyProfilePages/BankInfo';
import FamilyInfo from '../MyProfilePages/FamilyInfo';
import EducationInfo from "../MyProfilePages/EducationInfo"
import Experiance from "../MyProfilePages/Experiance"
import "./myprofile.css"


const MyProfile=()=>{
    return(
        <div className='myprofile'>
            <PersonalInfo/>
            <Emecontact/>
            <BankInfo/>
            <FamilyInfo/>
            <EducationInfo/>
            <Experiance/>
        </div>
    );
}

export default MyProfile;