import HOC from "./HOC.";
import "./HOC.css"
import "./familyinfo.css"

const FamilyInfo=()=>{
    return(
        <div>
            <h3 className="heading">Family Information</h3>
            <div className="title">
                <span>Name</span>
                <span>Relation</span>
                <span>Date Of Birth</span>
                <span>Phone</span>
            </div>
            <div className="title">
                <span>Kristin</span>
                <span>Mother</span>
                <span>23/08/1988</span>
                <span>9153624235</span>
            </div>
            <div style={{width:"90%", height:"0.01rem",backgroundColor:"#ffffff", margin:"1rem 0"}}></div>
            <div className="title">
                <span>Kristin</span>
                <span>Mother</span>
                <span>23/08/1988</span>
                <span>9153624235</span>
            </div>
        </div>
    );
}

export default HOC(FamilyInfo);