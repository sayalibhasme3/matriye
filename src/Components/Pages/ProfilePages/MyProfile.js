import React from 'react';
import { profiledata } from "../../../Utils/Data"
import PersonalInfo from "../MyProfilePages/PersonalInfo";
import Emecontact from '../MyProfilePages/EmeContact';
import BankInfo from '../MyProfilePages/BankInfo';
import FamilyInfo from '../MyProfilePages/FamilyInfo';
import EducationInfo from "../MyProfilePages/EducationInfo"
import Experiance from "../MyProfilePages/Experiance"
import "./myprofile.css"


const MyProfile=()=>{
    console.log(profiledata.Candidate1[0])
    return(
        <div className='myprofile'>
            <PersonalInfo perInfo={profiledata.Candidate1[0]}/>
            <Emecontact/>
            <BankInfo/>
            <FamilyInfo/>
            <EducationInfo/>
            <Experiance/>
        </div>
    );
}

export default MyProfile;