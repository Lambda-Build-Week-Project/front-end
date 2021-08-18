import '../../src/App.css'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Input } from 'semantic-ui-react'


function Login (){
const history = useHistory()
    const onSubmit = () => {
        history.push('/dashboard')
        }
    return(
        <div>
            <form >
                
                <label> Username:
                    <Input className='register-input' type='text' ></Input>
                </label>

                <label> Password:
                    <Input className='register-input' type='password'></Input>
                </label>

                <button onClick={onSubmit} className='form-buttons'>submit</button>
            </form>

            <Link to='/'>Cancel</Link>
            <Link to='/register'>
                <h6 style={{ fontSize: '7px'}}>
                    Don't have an account? <p style={{fontWeight: 'bold'}}>Register</p> </h6> 
            </Link>
        </div>
    )}

export default Login