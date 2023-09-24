import HOC from "./HOC.";
import "./HOC.css"

const BankInfo=()=>{
    return(
        <div>
            <h3 className="heading">Bank Information</h3>
            <div className="ainfo"> 
                <div><label>Bank Name</label><span>Canara Bank</span></div>
                <div><label>Bank Account Name</label><span>656513624624</span></div>
                <div><label>IFSC Code</label><span>CAN20243333</span></div>
                <div><label>PAN NO</label><span>SSDWDHJS</span></div>
            </div>
        </div>
    );
}

export default HOC(BankInfo);