import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Signup = () => {

    // Set Use States
    const [EmailErrorMessage, setEmailErrorMessage] = useState('')
    const [FirstNameErrorMessage, setFirstNameErrorMessage] = useState('')
    const [LastNameErrorMessage, setLastNameErrorMessage] = useState('')
    // const [ConfirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('')
    const [SuccessMessage, setSuccessMessage] = useState(<span>&#10004;</span>)
    const [EmailAddress, setEmailAddress] = useState('')
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [PasswordState, setPasswordState] = useState('')
    const [ConfirmPasswordState, setConfirmPasswordState] = useState('')

    // Set Error Functions
    let setEmailError = (message) => {
        setEmailErrorMessage(message);
    };
    let setFirstNameError = (message) => {
        setFirstNameErrorMessage(message)
    };
    let setLastNameError = (message) => {
        setLastNameErrorMessage(message)
    };
    // let setConfirmPasswordError = (message) => {
    //     setConfirmPasswordErrorMessage(message)
    // };

    // Set Success Function
    let setSuccess = (message) => {
        setSuccessMessage(message);
    };

    // Set Handle Form Functions 
    const handleEmailValue = () => {
        checkValidEmail()
    }
    const handleFirstNameValue = () => {
        checkValidFirstName()
    }
    const handleLastNameValue = () => {
        checkValidLastName()
    }

    // Validate Functions
    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    const checkValidEmail = () => {
        let emailValue = EmailAddress.toLowerCase().trim();

        if (emailValue === ' ') {
            setEmailError("Provide an email address")
        } else if (!isValidEmail(emailValue)) {
            setEmailError("Provide a valid email address")
        } else {
            setEmailError('')
            setSuccess(<span>&#10004;</span>)
        }
    };
    const checkValidFirstName = () => {
        let name = FirstName.toLowerCase().trim();

        if (name === '') {
            setFirstNameError("Provide a Name")
        } else if (name.length < 2) {
            setFirstNameError("Too Short")
        } else {
            setFirstNameError('')
            setSuccess(<span>&#10004;</span>)
        }
    };
    const checkValidLastName = () => {
        let name = LastName.toLowerCase().trim();

        if (name === '') {
            setLastNameError("Provide a Name")
        } else if (name.length < 2) {
            setLastNameError("Too Short")
        } else {
            setLastNameError('')
            setSuccess(<span>&#10004;</span>)
        }
    };
    // const confirmPassword = () => {
    //     // setPasswordState('');
    //     let password = PasswordState;
    //     let password2 = ConfirmPasswordState;
    //     // alert(password2)
        
    //     if (password2 === '') {
    //         setConfirmPasswordError("Passwords do not Match")
    //     } else if (password !== password2) {
    //         setConfirmPasswordError("Passwords do not Match")
    //     } else if (password === password2) {
    //         setConfirmPasswordError('')
    //         setSuccess(<span>&#10004;</span>)
    //     }
    // }
    
    return (
        <div className='signup_Wrap'>
        <h3><span>Leion</span> Student Management Board</h3>
            <form>
                <h4>Create New Account</h4>
                <div>
                    <div className="form_group">
                    <label htmlFor="firstname" className={ FirstNameErrorMessage || !FirstName ? 'error_message' : 'success_message' }>{ FirstNameErrorMessage || !FirstName ? FirstNameErrorMessage : SuccessMessage }</label>
                        <input 
                        value={ FirstName }
                        type="text" 
                        name='firstname' 
                        placeholder='Enter First Name' 
                        onChange={(e) => setFirstName(e.target.value)}
                        onChangeCapture={ handleFirstNameValue } />
                    </div>
                    <div className="form_group">
                    <label htmlFor="lastname" className={ LastNameErrorMessage || !LastName ? 'error_message' : 'success_message' }>{ LastNameErrorMessage || !LastName ? LastNameErrorMessage : SuccessMessage }</label>
                        <input 
                        value={ LastName }
                        type="text" 
                        name='lastname' 
                        placeholder='Enter Last Name' 
                        onChange={(e) => setLastName(e.target.value)}
                        onChangeCapture={ handleLastNameValue } />
                    </div>
                    <div className='form_group'>
                        <label htmlFor="email" className={ EmailErrorMessage || !EmailAddress ? 'error_message' : 'success_message' }>{ EmailErrorMessage || !EmailAddress ? EmailErrorMessage : SuccessMessage }</label>
                        <input 
                        value={ EmailAddress } 
                        type="text" 
                        name='email' 
                        placeholder='Enter Email Address' 
                        spellCheck={false}
                        onChange={(e) => setEmailAddress(e.target.value)} 
                        onChangeCapture={ handleEmailValue }/>
                    </div>
                    <div className='form_group'>
                        <label htmlFor="password"></label>
                        <input 
                        value={ PasswordState }
                        type="text" 
                        name='password' 
                        placeholder='ENTER PASSWORD' 
                        onChange={(e) => setPasswordState(e.target.value)} />
                    </div>
                    <div className='form_group'>
                        {/* <label htmlFor="confirm_password" className={ ConfirmPasswordErrorMessage || !ConfirmPasswordState ? 'error_message' : 'success_message' }>{ ConfirmPasswordErrorMessage || !ConfirmPasswordState ? ConfirmPasswordErrorMessage : SuccessMessage }</label> */}
                        <label htmlFor="confirm_password" className={ PasswordState === ConfirmPasswordState && ConfirmPasswordState ? 'success_message' : 'error_message' }>
                            {
                                ConfirmPasswordState && PasswordState === ConfirmPasswordState  ? <span>&#10004;</span> 
                                : ConfirmPasswordState && ConfirmPasswordState !== PasswordState ? 'Passwords do not match'
                                : ConfirmPasswordState === "" ? ""
                                : ""
                            }
                        </label>
                        <input 
                        value={ ConfirmPasswordState }
                        type="text" 
                        name="confirm_password" 
                        placeholder='CONFIRM PASSWORD' 
                        onChange={(e) => setConfirmPasswordState(e.target.value)} 
                        // onChangeCapture={ confirmPassword } 
                        />
                    </div>
                </div>
                <p>displaying the output of password and confirm password {PasswordState} & {ConfirmPasswordState} {PasswordState === ConfirmPasswordState ? 'true' : 'false'} </p>
                <div className='form_action'>
                    <button>Submit</button>
                    {/* <Link to={'/'} className='forgot_password'>Forgot password?</Link> */}
                </div>
                <div className='separator'></div>
                <div className='signup_action'>
                    <h3>Have an Account Already?</h3>
                    <Link to={'/'}><button type='button'> Go to Login!</button></Link>
                </div>
            </form>
        </div>
    )
}

export default Signup