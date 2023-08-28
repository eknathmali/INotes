import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
            if(word === 'danger'){
              word = 'error'
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
    }
  return (
 <div style = {{height:'50px'}}>

    {props.alert && <div>
         <div className= {`alert alert-${props.alert.type} alert-dismissible fade show px-2 py-1`} role="alert">
       <strong>{capitalize(props.alert.type)}</strong> : <strong>{props.alert.msg}</strong>
        <button type="button" className="btn-close py-2" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    </div>}
    </div>
  )
}