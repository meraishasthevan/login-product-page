import React from "react";
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
function Form(){
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [brand,setBrand]=useState("")
    const [price,setPrice]=useState("")
    const [quantity,setQuantity]=useState("")
    const [description,setDescription]=useState("")
  return(
    <div className="back-image">
      
        <div className="perfume-form">
        <h1>Please Enter the Details</h1>
      <form onSubmit={((e)=>{
        e.preventDefault()
      })}>
            <label>Enter the perfume name</label> <br/>
                 <input type="text" placeholder="Enter Your Perfume Name"  name="name" className="product" 
                 onChange={(event)=>setName(event.target.value)}/><br/><br/>
                 <label>Brand  Name</label><br/>
                 <input type="text" placeholder="Enter Your Brand Name" name="brand" className="product" 
                 onChange={(event)=>setBrand(event.target.value)}/><br/><br/>
                 <label>Enter the Price</label><br/>
                 <input type="number" placeholder="Enter the price" name="price" className="product"
                 onChange={(event)=>setPrice(event.target.value)}/><br/><br/>
                 <label>Enter the  Quantity</label><br/>
                 <input type="number" placeholder="Enter the quantity" name="quantity" className="product"
                 onChange={(event)=>setQuantity(event.target.value)}/><br/><br/>
                 <label>Description</label><br/>
                 <input type="text" name="description" className="product product-desc"
                 onChange={(event)=>setDescription(event.target.value)}/><br/><br/>
                 <button onClick={()=>navigate("/product", {state:{name,brand,price,quantity,description}})} type="submit">Submit</button>
        </form> 
                </div>
      
    </div>
  );
}
export default Form;