import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Login = () => {

    const [ErrorMessage, setErrorMessage] = useState('')
    const [SuccessMessage, setSuccessMessage] = useState(<span>&#10004;</span>)
    const [EmailAddress, setEmailAddress] = useState('')
    // const [Password, setPassword] = useState('')

    let setError = (message) => {
        setErrorMessage(message);
    };

    let setSuccess = (message) => {
        setSuccessMessage(message);
    };

    const handleFormValue = () => {
        checkValidEmail()
    }

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    
    const checkValidEmail = () => {
        let emailValue = EmailAddress.toLowerCase().trim();

        if (emailValue === ' ') {
            setError("Provide an email address")
        } else if (!isValidEmail(emailValue)) {
            setError("Provide a valid email address")
        } else {
            setError('')
            setSuccess(<span>&#10004;</span>)
        }
    };

    return (
        <div className='login_Wrap'>
            <h3><span>Leion</span> Student Management Board</h3>
            <form>
                <div>
                    <div className='form_group'>
                        {/* { 
                            ErrorMessage || !EmailAddress ? 
                            <label htmlFor="email" className='error_message'>{ErrorMessage}</label> :
                            <label htmlFor="email" className='success_message'>{SuccessMessage}</label>
                        } */}
                        <label htmlFor="email" className={ErrorMessage || !EmailAddress ? 'error_message' : 'success_message' }>{ ErrorMessage || !EmailAddress ? ErrorMessage : SuccessMessage }</label>
                        <input 
                        value={ EmailAddress } 
                        type="text" 
                        name='email' 
                        placeholder='Enter Email Address' 
                        spellCheck={false}
                        onChange={(e) => setEmailAddress(e.target.value)} 
                        onChangeCapture={ handleFormValue }/>
                    </div>
                    <div className='form_group'>
                        <label htmlFor="password"></label>
                        <input type="password" name='password' placeholder='ENTER PASSWORD' />
                    </div>
                </div>
                <div className='form_action'>
                    <button>Login</button>
                    <Link to={'/'} className='forgot_password'>Forgot password?</Link>
                </div>
                <div className='separator'></div>
                <div className='signup_action'>
                    <h3>New to LSMB?</h3>
                    <Link to={'/signup'}><button type='button'> Create Account!</button></Link>
                </div>
            </form>
        </div>
  )
}

export default Login