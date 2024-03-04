import { useState } from "react";

function ButtonComponnent({stock, isDisabled}) {
    const misEstilos = {
        backgroundColor:'red',
    }


    const [amount, setAmount] = useState(1);

  return (
    
    !isDisabled &&(<div>Cantidad
        <button className="menos" onClick={() => {amount > 1 && setAmount(amount-1)}} disabled={isDisabled} style={{misEstilos}}>-</button>
        {amount}
        <button className="mas" onClick={() => {amount < stock && setAmount(amount+1)}} disabled={isDisabled} style={{misEstilos}}>+</button>
        
    </div>) 
  )
}

export default ButtonComponnent

