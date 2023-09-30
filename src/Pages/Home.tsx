import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const valid = true;
    const move = () => {
        if (valid) {
            //routing
            navigate('/profile/123')
        }
    }
    return (
        <><h1>Home</h1>
            <button onClick={move}>Move</button>
        </>
    )
}

export default Home