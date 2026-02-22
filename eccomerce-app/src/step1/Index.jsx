import Multiplication from "./Multiplication";
import Division from "./Division";
import Addition from "./Addition"
import Substraction  from "./Substraction";

const CalculatorApp = () => {
     const num1=20;
  const num2=10;
  return (
    <>

      <div className="flex justify-center">
                <div className="border-3 border-blue-900 rounded-xl shadow-2xl m-4 w-1/4">
                    <h1 className="bg-blue-900 text-center text-xl text-white rounded-t-md">Calculator App
                  
                    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
                    </h1>
                    <div className="flex">
                        <input type="text" className="border-1 border-blue-900 p-3 m-2 text-center w-1/2 rounded-md" placeholder="num1" />
                        <input type="text" className="border-1 border-blue-900 p-3 m-2 text-center w-1/2 rounded-md" placeholder="num2" />
                    </div>
                </div>
            </div>
    
      <h1>This is calculator app</h1>
      <Division a={num1} b={num2} />
      <Multiplication a={num1} b={num2} />
      <Addition a={num1} b={num2}/>
      <Substraction a={num1} b={num2}/>
    </>
  );
};

export default CalculatorApp;