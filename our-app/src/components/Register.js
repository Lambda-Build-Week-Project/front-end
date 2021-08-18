import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../../src/App.css'
import 'semantic-ui-css/semantic.min.css' //for styling

function Register (props) {

    const {formChange, values} = props

    const onChange = (event) => {
        const {name, value} = event.target
        formChange(name, value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
    }
    
    return(
        <div>

            <form onSubmit={onSubmit}>

                <label> Username:
                    <input placeholder='John Doe' className='register-input' type='text'
                           name='username' value={values.username} onChange={onChange} ></input>
                </label>

                <label> Phone Number:
                    <input placeholder='2025550155' className='register-input' type='tel'
                           name='phone' value={values.phone} onChange={onChange} ></input>
                </label>

                <label> Password:
                    <input placeholder='$3cuRePasswqrd_' className='register-input' type='password'
                           name='password' value={values.password} onChange={onChange}></input>
                </label>

                <button className='form-buttons'>submit</button>
            </form>

            
            {/* <Link to='/'><button className='form-buttons'>Cancel</button></Link> */}
            <Link to='/'>Home</Link>
            {/* Note from Joey to Matt: Feel free to switch back to a button or the styling
            Matt, I just thought this is a little more standard */}

            <Link to='/login'>
                <h6 style={{ fontSize: '7px'}}>
                    Already have an account? <p style={{fontWeight: 'bold'}}>Login</p> </h6> 
            </Link>
        </div>
    )}

export default Register