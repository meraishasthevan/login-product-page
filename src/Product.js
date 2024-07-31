import React from 'react';
import {useLocation,Link,useNavigate} from  'react-router-dom';

function Product (){
  const handle=()=>{
    navigate("/")
  }
  const navigate=useNavigate()
  const location=useLocation()
  const product=localStorage.getItem("product")?JSON.parse(localStorage.getItem("product")):[]
  product.push(location.state)
  console.log(product);
  localStorage.setItem('product',JSON.stringify(product))
  /*localStorage.clear()*/
   const store=product.map((e,index)=>(
    
     <div className="product-card" key={index}>

         <img src="images/perfume.jpeg" alt="wait"/>
         <h3>Product Name:<span>{e.name}</span></h3>
         <h3>Brand Name:<span>{e.brand}</span></h3>
         <h3>Price:<span>{e.price}</span></h3>
         <h3>Quantity:<span>{e.quantity}</span></h3>
         <h3>Description:<span>{e.description}</span></h3>
        </div>
      
      
  ));

    return(
                <div className='product-backimg'>
                <div className='product-page'>
                <h1>Product Details</h1>
                <span className='product-flex'>{store}</span>
                <button onClick={handle}>Logout</button>
                <Link className='link-dash' to='/dashboard'>Dashboard</Link>
                </div>
                </div>
           );
}
export default Product;