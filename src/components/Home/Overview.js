import React from 'react'
import './overview.css'

import { NavLink } from 'react-router-dom'
import pic1 from '../../Assets/Images/pic1.png'
import pic2 from '../../Assets/Images/pic2.png'
import pic3 from '../../Assets/Images/pic2.png'
import menu2 from '../../Assets/Images/menu2.png'
const Overview = () => {
    return(

            <div className='overview-container'>
                <span className='overview-title'>
                    Analytics Overview
                </span>
                <div className='overview-body'>
                    <div className='overview-body-heading'>
                        <span>Total revenue</span>
                        <h1>3ETH</h1>
                    </div>
                    <div id='table-n-button'>
                    <div className='table'>
                        <table border='0' borderSpacing="0 100px" width='100%'>
                            <tr>
                                <td><img src={pic1} alt="unavailable"/></td>
                                <td><h2>The Man</h2> <button> wizrix</button></td>
                            <td colSpan={2} className="last_cell"> +0.22ETH</td>
                            </tr>
                            <tr>
                                <td><img src={pic2} alt="unavailable"/></td>
                                <td><h2>Void</h2> <button> wizrix</button></td>
                                <td colSpan={2} className="last_cell"> +0.22ETH</td>
                            </tr>
                            <tr>
                                <td><img src={pic3} alt="unavailable"/></td>
                                <td><h2>Looki</h2> <button> lookshare</button></td>
                                <td co={2} className="last_cell"> +0.22ETH</td>
                            </tr>
                        </table>
                    </div>
                    <NavLink to="create" className="link"><div className='create-collection-button'>
                        <span>
                            <img src={menu2} alt="logo" /></span>  <span id="button-name"> Create new collection</span>
                        </div>
                    </NavLink> 
                    </div>
                    
                </div>
            </div>
   
    )
}

export default Overview