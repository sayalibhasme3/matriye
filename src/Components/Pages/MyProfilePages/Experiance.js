import HOC from "./HOC.";
import "./HOC.css"

const Experiance=()=>{
    return(
        <div>
            <h3 className="heading">Experiance</h3>
            <div>
                <h4>Web Designer At Google </h4>
                <p style={{paddingBottom:"1rem"}}>Jan 2013 - Present(5 Years 2 Months)</p>
                <h4>Web Designer At Google </h4>
                <p style={{paddingBottom:"1rem"}}>Jan 2013 - Present(5 Years 2 Months)</p>
            </div>
        </div>
    );
}

export default HOC(Experiance);