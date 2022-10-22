import React from 'react'
import {NavLink} from "react-router-dom";

import './nav.css'
import logo from '../../Assets/Images/logo.png'
import menu1 from '../../Assets/Images/menu1.png'
import menu2 from '../../Assets/Images/menu2.png'
import menu3 from '../../Assets/Images/menu3.png'
import menu4 from '../../Assets/Images/menu4.png'
import menu5 from '../../Assets/Images/menu5.png'
const Navbar = () =>{
    return(
        <div className='create-container'>
            <div className='top'>
                <div className='logo'>
                    <NavLink to='/' ><img src={logo} alt="logo" /></NavLink> 
                </div>
                <div className='menu'>
                    <div className='img-container'>
                    <NavLink to='/' end className={({ isActive }) =>
                        isActive ? 'activelink' : ''
                            }> <img src={menu1} alt="logo" /></NavLink>
                    </div>
                    <div className='img-container'>
                    <NavLink to='/create' className={({ isActive }) =>
                                isActive ? 'activelink' : ''
                            }> <img src={menu2} alt="logo" /></NavLink>
                    </div>
                    <div className='img-container img-circle' >
                        <img src={menu3} alt="logo" />
                    </div>
                    <div className='img-container'>
                        <img src={menu4} alt="logo" />
                    </div>
                    <div className='img-container img-circle'>
                        <img src={menu5} alt="logo" />
                    </div>
                </div>
                
                
            </div>
            <div className='user img-circle'>
                <img src={menu5} alt="logo" />
            </div>
        </div>
    )
}

export default Navbar