import React from 'react'

export default function ImagenDeFondo(props) {
  return (
    <div className="fondo-entero">
        <img src={props.imagen} alt="Imagen de fondo" width="1410"/>
    </div>
  )
}
