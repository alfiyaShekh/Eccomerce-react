
import Button from "./Button"


let Addition = ({x,y})=>{
    let addtion_click=()=>{
        alert("Addition = "+(x+y));
    }
    return(
        <>
        <Button 
         label={"Addition"} fn={addtion_click}/>
        
        </>
    )
        
}
export default Addition;