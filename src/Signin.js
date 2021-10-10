import React from 'react'
import './Signin.css';
import { Link ,useHistory} from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';

function Signin() {
    const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const Signin =e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(auth => history.push('/'))
        .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();
        auth.createUserwithEmailAndPassword(email,password).then((auth)=>{
            if(auth)
            {
                history.push('/')
            }
            
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className='login' >
            <Link to="/">
                <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='' />

            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form >
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setemail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value = {password} onChange ={e=>setpassword(e.target.value)}/>

                    <button type='submit'onClick = {Signin} className="signin__button">
                        Sign In
                    </button>
                </form>
                <p>
                    By signing in you agree to the terms and conditions of use and sale.Please see our privacy Notice,our Cookies Notice and our interest based Notice.
                </p>

                <button onClick={register} className="register__button">
                    Create Your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Signin
