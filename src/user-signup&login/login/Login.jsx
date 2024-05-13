import React from 'react'
import Subhead from '../../utilities/Subhead'
import Pera from '../../utilities/Pera'
import { Link } from 'react-router-dom'
import googlelogo from '../../images/google.svg'
import musicimg from '../../images/login-music-img.jpeg'
import Button from '../../component/button/Button'
import './Login.css'

const Login = () => {
  return (
    <section id='login-page'>
        <div className='login-page-wrapper'>
            <div className='user-details-box'>
                <div className='form-user-all-details-box'>
                    <div className='user-details'>
                        <Subhead text='Login your account' style='login-page-head'/>
                        <Pera text='Enter your credentials to access your account' style='login-page-pera'/>
                        <div className='google-account-box'>
                            <img src={googlelogo} alt="not found" />
                            <Link className='google-account' to='google'>Sign in with Google</Link>
                        </div>
                    </div>
                    <form className='form-box'>
                        <Pera text="Email Address" style="email-style"/>
                        <div className='email-input-box'>
                            <input className='email-input' type='email' placeholder='Enter your email'/>
                        </div>
                        <Pera text="password" style="password-style"/>
                        <div className='password-input-box'>
                            <input className='password-input' type='password' placeholder='Enter your password'/>
                        </div>
                        <div className='forget-pass-box'>
                            <Link className='forget-pass' to='forget'>Forget?</Link>
                        </div>
                        <div className='form-login-btn-box'>
                            <Button text='login' style='form-login-btn'/>
                        </div>
                        <div className='sign-create-account-box'>
                            <Pera text='Not a member?' style='sign-create-account-style'/>
                            <Link className='sign-create-style' to='sign'>Create Account</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className='login-image-box'>
                <img src={musicimg} alt="not found" />
            </div>
        </div>
    </section>
  )
}

export default Login