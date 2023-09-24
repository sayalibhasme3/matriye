import "./HOC.css"
import drawpen from "../../../Images/drawpen.PNG"

const HOC=(OriginalComponent)=>{

   function Newcomponent(){
    return (
        <div className="HOC">
            <img src={drawpen} alt="drawpen"/>
            <OriginalComponent/>
        </div>
    )
   }
   return Newcomponent;
}

export default HOC;