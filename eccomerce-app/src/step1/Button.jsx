let Button=({label,fn})=>{
    return(
        <>
        <button className="rounded-1 bg-green-900 hover:bg-blue-9006 shadow-md hover:shadow-2xl rounded-md text-2xl m-2"
        onClick={()=>fn()}>
          {label}
        </button>
        </>
    )

}

export default Button;