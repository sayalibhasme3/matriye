import HOC from "./HOC.";
import "./HOC.css"
const PersonalInfo=()=>{
    return(
        <div>
            <h3 className="heading">Personal Information</h3>
            <div> 
                <div><label>Passport No</label><span>:</span>{}</div>
                <div><label>Passport Exp Date.</label><span>:</span>{}</div>
                <div><label>Telephone</label><span>:</span>{}</div>
                <div><label>Nationality</label><span>:</span>{}</div>
                <div><label>Religion</label><span>:</span>{}</div>
                <div><label>Maritial Status</label><span>:</span>{}</div>
                <div><label>Emloyement Of Spouse</label><span>:</span>{}</div>
                <div><label>No of Children</label><span>:</span>{}</div>
            </div>
        </div>
    );
}

export default HOC(PersonalInfo);