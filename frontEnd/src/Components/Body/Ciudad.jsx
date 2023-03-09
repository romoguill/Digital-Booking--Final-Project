import React from 'react'

const Ciudad = ({id, nombre}) => {
  return (
    <div key={id}>
        <p>{nombre}</p>
    </div>
  )
}

export default Ciudad