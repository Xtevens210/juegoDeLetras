import React from 'react'

export default function BotonesColor(props) {
  return (
    <div className={props.claseDiv}>
        <label className={props.claseLabel}>{props.color}
            <button onClick={() => props.funcion(props.color)}></button>
        </label>
        
    </div>
  )
}
