import React, { useState } from 'react'
import Subhead from '../../utilities/Subhead'
import Pera from '../../utilities/Pera'
import musicimg from '../../images/login-music-img.jpeg'
import Button from '../../component/button/Button'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from 'react-router-dom'
import { Oval } from 'react-loader-spinner';
import './Signup.css'

const Signup = () => {
    const auth = getAuth()
    const db = getDatabase()
    const navigate = useNavigate()

                //this useState recive the signup data
    const [signinData , setSigninData] = useState({
        fullname : "",
        email : "",
        password : "",
        conpass : ""
    })

                //this useState send the error when user empty the input box and press the login button;
    const [sendError , setSendError] = useState({
        fullname : "",
        email : "",
        password : "",
        conpass : ""
    }) 

    const handelform = (e)=>{
        let {name , value} = e.target
        setSigninData({...signinData,[name]:value})
    }

         //email regex
    const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 

        //password regex
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    const signinBtn = (e)=>{
        e.preventDefault();
                //validation
        if(!signinData.fullname){
            setSendError({fullname:"Fullname is Require"})
        }else if(!signinData.email){
            setSendError({fullname: ""})
            setSendError({email : "Email is Require"})
        }else if(!signinData.email.match(emailregex)){
            setSendError({email: ""})
            setSendError({email :"Inter valid Email"})
        }else if(!signinData.password){
            setSendError({email: ""})
            setSendError({password : "Passowrd is Require"})
        }else if(!signinData.password.match(password_pattern)){
            setSendError({password : ""})
            setSendError({password : "Strong Password"})
        }else if(!signinData.conpass){
            setSendError({password: ""})
            setSendError({conpass:"Confirm password is Require"})
        }else if( signinData.password != signinData.conpass){
            setSendError({conpass:""})
            setSendError({conpass : "Confirm Password Don't match"})
        }else{
            // react loder true
            setLoder(true)
            setSendError({conpass:""})
            createUserWithEmailAndPassword(auth, signinData.email, signinData.password)
            .then((userCredential) => {
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    updateProfile(auth.currentUser, {
                        displayName: signinData.fullname, 
                        photoURL: "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="
                      }).then(() => {
                            set(ref(db,"viewerdata/" + userCredential.user.uid), {
                                viewername : userCredential.user.displayName,
                                vieweremail : userCredential.user.email,
                                viewerimg : userCredential.user.photoURL
                            })
                      }).then(()=>{
                        navigate("/")
                    });
                });
            })
            .catch((error) => {
              const errorCode = error.code;
              if(errorCode == "auth/email-already-in-use"){
                    setSendError({email :"Email already exised"})
                setLoder(false)
              }else{
                setSendError({email : ""})
              }
            });
        }
    }
    // react loder state
    let [loder , setLoder] = useState(false)
  return (
    <section id='signin-page'>
        <div className='signin-page-wrapper'>
            <div className='signin-image-box'>
                <img src={musicimg} alt="not found" />
            </div>
            <div className='signin-user-details-box'>
                <div className='signin-form-user-all-details-box'>
                    <div className='signin-user-details'>
                        <Subhead text='Create your account' style='signin-page-head'/>
                        <Pera text='Create your personal account' style='signin-page-pera'/>
                    </div>
                    <form className='signin-form-box'>
                        <Pera text="Full Name" style="signin-fullname-style"/>
                        <div className='signin-email-input-box'>
                            <input className='signin-fullname-input' type='text' placeholder='Enter your name' name="fullname" onChange={handelform}/>
                            {sendError.fullname && <p className='signin-lonin-error'>{sendError.fullname}</p>}
                        </div>
                        <Pera text="Email Address" style="signin-email-style"/>
                        <div className='signin-email-input-box'>
                            <input className='signin-email-input' type='email' placeholder='Enter your email' name="email" onChange={handelform}/>
                            {sendError.email && <p className='signin-lonin-error'>{sendError.email}</p>}
                        </div>
                        <Pera text="password" style="signin-password-style"/>
                        <div className='signin-password-input-box'>
                            <input className='signin-password-input' type='password' placeholder='Enter your password' name="password" onChange={handelform}/>
                            {sendError.password && <p className='signin-lonin-error'>{sendError.password}</p>}
                        </div>
                        <Pera text="Confrim Password" style="signin-conpass-style"/>
                        <div className='signin-conpass-input-box'>
                            <input className='signin-conpass-input' type='password' placeholder='confrim-password' name="conpass" onChange={handelform}/>
                            {sendError.conpass && <p className='signin-lonin-error'>{sendError.conpass}</p>}
                        </div>
                        <div className='signin-form-signin-btn-box'>
                            {
                                loder
                                ?
                                (<Oval
                                    visible={true}
                                    height="25"
                                    width="25"
                                    color="#000"
                                    ariaLabel="oval-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="oval"
                                    />)
                                :
                                <Button Submit={signinBtn} text='signin' style='signin-form-signin-btn'/>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Signup