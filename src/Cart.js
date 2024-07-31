import React, { createContext, useContext, useState } from "react";
import { CartContext } from "./CartContext";

  const  cartContext=createContext()

function Cart(){
    const{quantity}=useContext(CartContext)
    return(
        <>
          <h3>cart:{quantity}</h3>
          <Component1/>
        </>
    )
}

function Component1(){
    return(
        <div>
          <h5>Component1</h5>
          <Component2/>  
        </div>
    )
}

function Component2(){
    return(
        <div>
          <h5>Component2</h5> 
          <Component3/> 
        </div>
    )
}
function Component3(){
    return(
        <div>
          <h5>Component3</h5>
          <Counter/>  
        </div>
 )
}

function Counter(){

    const{quantity,setQuantity}=useContext(CartContext)

      function increment(){
        setQuantity(quantity+1)
      }

      function decrement(){
       if(quantity>1) {setQuantity(quantity-1)}
      }

    return(
        <div>
            <h5>Counter</h5>
            <button onClick={increment}>+</button>
            <span>{quantity}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Cart; 