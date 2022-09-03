import React from 'react'
import "./Card.css";


export default function Card(props) {
  return (
    <div className='container my-2'>
        <div className="Cardd container card my-2">
            <div className="card-body">

            <p B className="card-text"><small className="text-success">ID No {props.id}</small></p>
                <h4 className="card-title text-success" style={{"color": "green"  }}>{props.id} - {props.title}</h4>
                <p className="card-text">{props.body}</p>
               
              
            </div>
        </div>
    </div>
  )
}
