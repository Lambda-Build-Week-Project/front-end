import React from 'react';
import { Link, useHistory } from 'react-router-dom';



export default function DashBoard () {
    return (
        <div>
            <div className='dashboard-nav'>
                <h4>DashBoard</h4>
                <Link style={{textDecoration:'none'}}id='logout'to='/'><h4>logout</h4></Link>
            </div >
            <Link id='acc-sett' to='/accountsettings'><h5>Account Settings</h5></Link>
            <div className='dash-options'>
                <button className='form-buttons'>Create Plant</button>
                <button className='form-buttons'>view all saved plants</button>
            </div>
            </div>
        
    )
}