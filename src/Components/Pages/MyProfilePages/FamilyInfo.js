import HOC from "./HOC.";
import "./HOC.css"
import "./familyinfo.css"

const FamilyInfo=({})=>{
    return(
        <div>
            <h3 className="heading">Family Information</h3>
            <div className="title">
                <span>Name</span>
                <span>Relation</span>
                <span>Date Of Birth</span>
                <span>Phone</span>
            </div>
        </div>
    );
}

export default HOC(FamilyInfo);