import React from 'react';
import {Link} from 'react-router-dom';


const Navbar =(props) =>{
 
   
       return(
        <nav className='navbar bg-primary'>
            <h1>
           <i className={props.icon} /> {props.title}
            </h1>
            <ul>
                <li>
                    <Link to='/github'>Github</Link>
                </li>
                <li>
                    <Link to='/linkedin'>LinkedIn</Link>
                </li>
                <li>
                    <Link to='/gitlab'>Gitlab</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
       );
    
}

Navbar.defaultProps={
    title:'Discovery',
    icon:'fab fa-searchengin'
   
    
};

export default Navbar;