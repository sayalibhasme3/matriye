import "./HOC.css"
import drawpen from "../../../Images/drawpen.PNG"
import { profiledata } from "../../../Utils/Data"

const HOC=(OriginalComponent)=>{

   function Newcomponent(){
    return (
        <div className="HOC">
            <img src={drawpen} alt="drawpen"/>
            <OriginalComponent in={profiledata.Candidate1[0]}/>
        </div>
    )
   }
   return Newcomponent;
}

export default HOC;