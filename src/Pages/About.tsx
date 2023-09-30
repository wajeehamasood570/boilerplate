import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
    const navigate = useNavigate()
    return (
        <> <h1>About</h1>
            <button onClick={()=>{
                navigate('/profile/123')
            }} >Move</button>
        </>
    )
}

export default About