import Multiplication from "./Multiplication";
import Division from "./Division";
import Addition from "./Addition"
import Substraction  from "./Substraction";

const CalculatorApp = () => {
  return (
    <>
      <h1>This is calculator app</h1>
      <Division />
      <Multiplication />
      <Addition />
      <Substraction />
    </>
  );
};

export default CalculatorApp;