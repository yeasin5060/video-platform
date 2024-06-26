import React, { useState } from 'react'
import Subhead from '../../utilities/Subhead'
import Pera from '../../utilities/Pera'
import { Link, useNavigate } from 'react-router-dom'
import googlelogo from '../../images/google.svg'
import musicimg from '../../images/login-music-img.jpeg'
import Button from '../../component/button/Button'
import { getAuth, signInWithEmailAndPassword ,signOut} from "firebase/auth";
import { useDispatch } from 'react-redux'
import { userdata } from '../../creatslice/userdetails'
import { Oval } from 'react-loader-spinner';
import './Login.css'

const Login = () => {
    const auth = getAuth();
    const navigate = useNavigate()
    const dispatch = useDispatch()
                //this useState recive the login data
    const [loginData , setLoginData] = useState({
        email : "",
        password : ""
    })

                //this useState send the error when user empty the input box and press the login button;
    const [sendError , setSendError] = useState({
        email : "",
        password : ""
    }) 

    const handelform = (e)=>{
        let {name , value} = e.target
        setLoginData({...loginData,[name]:value})
    }

         //email regex
  const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 

    const loginBtn = (e)=>{
        e.preventDefault();
        //react loder ture
        setReactLoder(true)
                //validation
        if(!loginData.email){
            setSendError({email:"Email is Require"})
        }else if(!loginData.email.match(emailregex)){
            setSendError({email : ""})
            setSendError({email : "Inter valid Email"})
        }else if(!loginData.password){
            setSendError({password : "Password is Require"})
        }else{
            signInWithEmailAndPassword(auth, loginData.email, loginData.password)
                .then((userCredential) => {
                    if(userCredential.user.emailVerified){ //check email verified
                        localStorage.setItem("user" , JSON.stringify(userCredential.user))
                        dispatch (userdata(userCredential.user))
                        navigate("home")
                     }else{
                        signOut(auth).then(() => {
                            setSendError({email:"Please verify your email"})
                        });
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if(errorCode == "auth/invalid-credential"){
                        setSendError({email : "invalid email or password"})
                        setReactLoder(false)
                    }else{
                        setSendError({email : ""})
                    }
                });

        }
    }

        //react loder
    let [ reactLoder , setReactLoder] = useState (false)
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
                        <div className='or-box'>or</div>
                    </div>
                    <form className='form-box'>
                        <Pera text="Email Address" style="email-style"/>
                        <div className='email-input-box'>
                            <input className='email-input' type='email' placeholder='Enter your email' name="email" onChange={handelform}/>
                            {sendError.email && <p className='lonin-error'>{sendError.email}</p>}
                        </div>
                        <Pera text="password" style="password-style"/>
                        <div className='password-input-box'>
                            <input className='password-input' type='password' placeholder='Enter your password' name="password" onChange={handelform}/>
                            {sendError.password && <p className='lonin-error'>{sendError.password}</p>}
                        </div>
                        <div className='forget-pass-box'>
                            <Link className='forget-pass' to='forget'>Forget?</Link>
                        </div>
                        <div className='form-login-btn-box'>
                            {
                                reactLoder
                                ?
                                (<Oval
                                    visible={true}
                                    height="30"
                                    width="30"
                                    color="#fff"
                                    ariaLabel="oval-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="oval"
                                    />)
                                :
                                <Button Submit={loginBtn} text='login' style='form-login-btn'/>
                            }
                        </div>
                        <div className='sign-create-account-box'>
                            <Pera text='Not a member?' style='sign-create-account-style'/>
                            <Link className='sign-create-style' to='/signup'>Create Account</Link>
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