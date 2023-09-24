import HOC from "./HOC.";
import "./HOC.css"

const Emecontact=()=>{
    return(
        <div>
            <div><h3 className="heading">Emergency Contact</h3></div>
            <div>
                <h4>Primary</h4>
                <p>Name</p>
                <p>Relationship</p>
                <p>Phone</p>
                <div style={{width:"90%", height:"0.01rem",backgroundColor:"#ffffff", margin:"1rem 0"}}></div>
                <h4>Secondary</h4>
                <p>Name</p>
                <p>Relationship</p>
                <p>Phone</p>
            </div>
        </div>
    );
}

export default HOC(Emecontact);