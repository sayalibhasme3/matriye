import HOC from "./HOC.";
import "./HOC.css"

const EducationInfo=()=>{
    return(
        <div>
            <h3 className="heading">Education</h3>
            <div>
                <h4>International college of Engineering</h4>
                <p>B.Tech CSE</p>
                <p style={{paddingBottom:"1rem"}}>2002-2008</p>
                <h4>International college of Engineering</h4>
                <p>B.Tech CSE</p>
                <p style={{paddingBottom:"1rem"}}>2002-2008</p>
            </div>
        </div>
    );
}

export default HOC(EducationInfo);