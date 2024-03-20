import React, { useState } from 'react'
import { Link } from 'react-router-dom'



export default function SignUp() {
  const[credentials,setcredentials] = useState({name:"",password:"",email:"",geolocation:""})

    const handleSubmit = async (e)=>{
     
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,password:credentials.password,email:credentials.email,location:credentials.geolocation} )
        })

        const json = await response.json()
        console.log(json)
        if(json.success){
          alert("user created successfully")
          setcredentials({name:"", password:"", email:"", geolocation:""});
        }
        if(!json.success){
          alert("enter valid credentials")
        }

    }
    const onChange=(event)=>{
      setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <>
      <div className='container'>
        
    <form onSubmit={handleSubmit}>
    <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control"  name='name' value={credentials.name} onChange={onChange} />
   
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="geolocation">Address</label>
    <input type="text" className="form-control" id="geolocation"   name='geolocation' value={credentials.geolocation} onChange={onChange}/>
  </div>
  
  <button type="submit" className="btn btn-primary" style={{"margin-top":"5px"}}>Submit</button>
  <Link to='/loginuser' className='m-3 btn btn-danger'>Already a User</Link>
  
</form>
      </div>
    </>
  )
}
