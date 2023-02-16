import React from "react"
import { Link } from "react-router-dom"

const Home = ({user}) => {

    return (
        <>
            <h1>Home</h1>
            <p>Bienvenido {user} !</p>
        </>
    )
}

export default Home