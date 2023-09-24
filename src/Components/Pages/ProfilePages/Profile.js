import React from "react";
import "./profile.css"
import Introduction from "./Introduction";
import ProfileContainer from "../ProfilePages/ProfileContainer";

const Profile = ({ profiledetails }) => {
    return (
        <div className="profilebar">
            <h4 className="profile-title">Profile</h4>
            <h6 className="dashboard">Dashboard &gt; Profile </h6>
            <Introduction Introduction={profiledetails} />
            <ProfileContainer />
        </div>

    );
}

export default Profile;