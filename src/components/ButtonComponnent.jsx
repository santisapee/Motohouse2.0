import { useState } from "react";

function ButtonComponnent({ stock, isDisabled, amount, setAmount }) {
  const misEstilos = {
    backgroundColor: "red",
  };

  return (
    !isDisabled && (
      <div>
        Cantidad
        <button
          className="menos"
          onClick={() => {
            amount > 1 && setAmount(amount - 1);
          }}
          disabled={isDisabled}
          style={{ misEstilos }}
        >
          -
        </button>
        {amount}
        <button
          className="mas"
          onClick={() => {
            amount < stock && setAmount(amount + 1);
          }}
          disabled={isDisabled}
          style={{ misEstilos }}
        >
          +
        </button>
      </div>
    )
  );
}

export default ButtonComponnent;
