import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div style={{display:'flex', justifyContent:'center', width:'100%', height:'40%' ,background:'silver'}}>
           
               <Link style={{textDecoration: 'none', margin:'20px'}} to='/'><h5>Home</h5></Link> 
               <Link style={{textDecoration: 'none', margin:'20px'}} to='/about'><h5>About</h5></Link>
               <Link style={{textDecoration: 'none', margin:'20px'}} to='/contact'><h5>Contact</h5></Link>
        </div>
    );
}

export default Navbar;