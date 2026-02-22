
import Button from "./Button"
let Substraction = ({x,y})=>{
    let sub_click=()=>{
        alert("Subraction = "+(x-y));
    }
    return (
        <>
            
            <Button label={"Subtarction"} fn={sub_click}/>  
        </>
    )
}   
export default Substraction;