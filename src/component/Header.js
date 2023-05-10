import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    
    return <>
    <nav>get ready to complete your goal</nav>
    <div className='header'>
      <Link to='/'> Home </Link>
      <Link to='/About'> About </Link>
      <Link to='/Services'> Services </Link>
      <Link to='/Contact'> Contact us</Link>
      <Link to='/User/tempId'>User</Link>


    </div>
    </>
      
    
  };

export default Header