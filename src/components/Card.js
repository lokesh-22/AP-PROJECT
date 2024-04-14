import React from 'react'

export default function Card(props) {
   let Options = props.options
   let priceOptions = Object.keys(Options)
   const handleAddToCart = ()=>{
    console.log("Added to cart")
  }

  return (
    <div><div>
    <div className="card mt-3" style={{"width": "18rem", "maxHeight":"360px"}}>
  <img src={props.img}  className='card-img-top' alt="...." style={{height:"220px",objectFit:"fill"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.foodName}</h5>
    
    <div className="container w-100">
    <select className="m-2 height-100 bg-success rounded">
        {
          Array.from(Array(6), (e,i)=>{
            return(
              <option key={i+1} value={i+1}>{i+1}</option>
            )
          })
        }
      </select>
      <select className="m-2 height-100 bg-success rounded">
      {priceOptions.map((data)=>{
        return <option key={data} value={data}>{data}</option>
      })}
      </select>
      <div className="d-inline fs-5">Total price</div>
    </div>
   
    <button onClick={handleAddToCart} className="btn btn-success">Add to cart</button>
    
  </div>
</div>
    </div></div>
  )
}
