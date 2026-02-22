
import Button from "./Button"

let Multiplication = ({x,y})=>{
    let mul_click=()=>{
        alert("Multiplication = "+(x*y));
    }
    return(
        <>
        <Button label={"Multiplication"} fn={mul_click}/> 
        </>
    )
}

export default Multiplication;