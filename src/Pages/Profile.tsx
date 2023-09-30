import React from 'react'
import {useLocation, useParams} from 'react-router-dom'


const Profile = () => {

    const params = useParams()
    const location = useLocation();
    console.log(location.state);

  return (
    <h2 >Profile: {params.id}</h2>
  )
}

export default Profile