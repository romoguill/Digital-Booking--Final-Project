import React from 'react'

const ReserveCard = ({reserva, producto}) => {
    // console.log("hola prro", item)
  return (
    <div>weass

        {reserva.fechaInicial}
        {producto ? producto.titulo : "no hay nada"}
        {producto ? producto.descripcion : "descripcion"}
    </div>
  )
}

export default ReserveCard