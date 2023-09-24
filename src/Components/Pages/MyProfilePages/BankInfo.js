import HOC from "./HOC.";
import "./HOC.css"

const BankInfo=({})=>{
    return(
        <div>
            <h3 className="heading">Bank Information</h3>
        </div>
    );
}

export default HOC(BankInfo);