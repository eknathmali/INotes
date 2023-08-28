import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup(props) {
  const[creadentials , setCreadentials] = useState({name :"" , email:"" , password:"", confirm_password : ""});

  let history = useNavigate();
  const host = "http://localhost:5000";
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(creadentials.password !== creadentials.confirm_password) {
      props.showAlert("Password doesn't match" , 'danger')
      return;
  
    }
    const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name:creadentials.name ,  email:creadentials.email,password:creadentials.password }),
      });
      const json = await response.json();
     if(json.success){
       localStorage.setItem('token' , json.token);
       history ('/');
       props.showAlert("Account Created Successfully" , 'success')
     }else{
        //alert invalid user
        // alert(json.error)
        props.showAlert("Invalid Creadentials" , 'danger')
     }
}
  const onchange = (e) =>{
    setCreadentials({...creadentials , [e.target.name]:e.target.value})
    console.log(creadentials);
}
  return (
    <div className='mt-3'>
      <h2 >Become user of iNoteBook</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-3 my-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name="name" className="form-control" id="name" aria-describedby="emailHelp"  onChange={onchange} value={creadentials.name}  required minLength={2} />
         
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"  onChange={onchange} value={creadentials.email} required minLength={5} />
         
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password"  name = "password" className="form-control" id="password"     onChange={onchange} value={creadentials.password}  required minLength={5}/>
            <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
            <input type="password"  name = "confirm_password" className="form-control" id="confirm_password"     onChange={onchange} value={creadentials.confirm_password}  required minLength={5}/>
        </div>

<button type="submit" className="btn btn-primary" >Submit</button>

</form>
</div>
  )
}

export default Signup