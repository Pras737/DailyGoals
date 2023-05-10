import React from 'react';
import {useParams,useNavigate} from 'react-router-dom';

const User = () => {

    const params=useParams()
    const navigation=useNavigate();

    console.log(params.id)
  return (
    <div className='User'>
        <button onClick={()=>navigation("/About")}>Click Me</button>
    </div>
  )
}

export default User