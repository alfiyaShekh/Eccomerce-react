
import Button from "./Button"

let Division = ({x,y})=>{
    let div_click=()=>{
        alert("Division = "+(x/y));
    }

    return(
        <>
        <Button label={"Division"} fn={div_click}/> 
        </>
    )
}

export default Division;