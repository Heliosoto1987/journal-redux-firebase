//vendor
import React from 'react'
import { useDispatch } from 'react-redux'
//router
import { Link } from 'react-router-dom'
import { starLoginEmailPassoword, startGoogleLogin } from '../../actions/auth';
//custom hooks
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
    const dispatch = useDispatch()

    const [ formValues, handleInputChange ] = useForm({
        email: 'heliosoto17@gmail.com',
        password: 123456,
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( starLoginEmailPassoword( email, password ) )
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onClick={ handleLogin }>

                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />


                <button
                className="btn btn-primary btn-block"
                type="submit"
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                        <div className="google-btn"
                        onClick={handleGoogleLogin}
                        >
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </div>
                            <p className="btn-text">
                                <b>Sign in with google</b>
                            </p>
                        </div>
                </div>
                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new Account
                </Link>
            </form>
        </>
    )
}