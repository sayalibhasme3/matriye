import React from "react";
import "./profile.css"
import Introduction from "./Introduction";
import ProfileContainer from "../ProfilePages/ProfileContainer";
import Footer from "./Footer";

const Profile = ({ profiledetails }) => {
    console.log(profiledetails);
    return (
        <div className="profilebar">
            <h4 className="profile-title">Profile</h4>
            <h6 className="dashboard">Dashboard &gt; Profile </h6>
            <Introduction Introduction={profiledetails} />
            <ProfileContainer />
            <Footer/>
        </div>

    );
}

export default Profile;