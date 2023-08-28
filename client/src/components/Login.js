import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const[creadentials , setCreadentials] = useState({email:"" , password:""});
    let history = useNavigate();
    const host = "http://localhost:5000";
    const handleSubmit = async(e)=>{
            e.preventDefault();
            const response = await fetch(`${host}/api/auth/login`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email:creadentials.email,password:creadentials.password }),
              });
              const json = await response.json();
             if(json.success){
               localStorage.setItem('token' , json.token);
               history ('/');
               props.showAlert("Login  Successfull" , 'success')
             }else{
                //alert invalid user
                props.showAlert("Invalid details" , 'danger')
             }
    }

    const onchange = (e) =>{
         setCreadentials({...creadentials , [e.target.name]:e.target.value})
    }
  return (
    <div className='mt-3'>
      <h2 >Login to continue to iNoteBook</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3 my-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"  onChange={onchange} value={creadentials.email} />
             
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password"  name = "password" className="form-control" id="password"     onChange={onchange} value={creadentials.password}/>
            </div>

  <button type="submit" className="btn btn-primary" >Submit</button>

</form>
    </div>
  )
}

export default Login