import HOC from "./HOC.";
import "./HOC.css"
import "./personalinfo.css"

const PersonalInfo=({ perInfo })=>{
    return(
        <div>
            <h3 className="heading">Personal Information</h3>
            <div className="ainfo"> 
                <div><label>Passport No</label><span>956832412023</span></div>
                <div><label>Passport Exp Date.</label><span>12/9/2029</span></div>
                <div><label>Telephone</label><span>02342265986</span></div>
                <div><label>Nationality</label><span>Indian</span></div>
                <div><label>Religion</label><span>Hindu</span></div>
                <div><label>Maritial Status</label><span>Single</span></div>
                <div><label>Emloyement Of Spouse</label><span>N/A</span></div>
                <div><label>No of Children</label><span>N/A</span></div>
            </div>
        </div>
    );
}

export default HOC(PersonalInfo);