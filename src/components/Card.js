import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatchCart, useCart } from './ContextReducer'
import QuantitySelector from './QuantitySelector'


export default function Card(props) {
   let Options = props.options
   let priceOptions = Object.keys(Options)
   let navigate = useNavigate()
   const dispatch = useDispatchCart();

   const [qty, setQty] = useState(1)
   const [size, setSize] = useState("")
   const priceRef = useRef();
 
let data = useCart()
  
   const handleQty = (e) => {
    setQty(e.target.value);
  }
  const handleOptions = (e) => {
    setSize(e.target.value);
  }
  let foodItem = props.foodItem
  const handleAddToCart = async () => {
  let food = []
  for (const item of data) {
    if (item.id === foodItem._id) {
      food = item;

      break;
    }
  }
  console.log(food)
  console.log(new Date())
  if (food.length !== 0) {
    if (food.size === size) {
      await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
      return
    }
    else if (food.size !== size) {
      await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
      console.log("Size different so simply ADD one more to the list")
      return
    }
    return
  }

  await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })


 

}
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])
  let finalPrice = qty * parseInt(Options[size]); 

  return (
    <div><div>
    <div className="card mt-3" style={{"width": "18rem", "maxHeight":"400px"}}>
  <img src={props.foodItem.img}  className='card-img-top' alt="...." style={{height:"220px",objectFit:"fill"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.foodItem.name}</h5>
    
    <div className="container w-100">
    {/* <select className="m-2 height-100 bg-success rounded"  ref={priceRef}  onChange={handleQty}>
        {
          Array.from(Array(6), (e,i)=>{
            return(
              <option key={i+1} value={i+1}>{i+1}</option>
            )
          })
        }
      </select> */}
      <QuantitySelector/>
      <select className="m-2 height-100 bg-success rounded" ref={priceRef}  onChange={handleOptions}>
      {priceOptions.map((data)=>{
        return <option key={data} value={data}>{data}</option>
      })}
      </select>
      <div className="d-inline fs-5">Rs{finalPrice}/-</div>
    </div>
   
    <button onClick={handleAddToCart} className="btn btn-success">Add to cart</button>
    
  </div>
</div>
    </div></div>
  )
}
