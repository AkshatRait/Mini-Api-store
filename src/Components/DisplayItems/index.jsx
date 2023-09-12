import { useState,useEffect } from "react";
import axios from "axios";
import "./index.css"

const DisplayItems = () => {
    const [display, setDisplay] = useState([]);

    useEffect(()=>{
        axios('https://dummyjson.com/products').then((response)=>{
            let array = response.data.products;
            setDisplay(array);
            console.log(array);
        })
    },[])

let displayJSX = display.map((product) => (
    <div className="product" key={product.id}>
        <img src = {product.images[0]}/>
    <h3>Product- {product.title} -${product.price}</h3>
    </div>
  ))


    return (
        <div className="container">
            {displayJSX}
        </div>
      );
    }

export default DisplayItems