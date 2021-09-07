//vendor
import React from 'react'
//router
import { Link } from 'react-router-dom'
//custom hook
import { useForm } from '../../hooks/useForm'
//library
import validator from 'validator'
//redux
import { useDispatch, useSelector } from 'react-redux'
//actions
import { removeError, setError } from '../../actions/ui'
//funtion Auth
import { startRegisterWithEmailPasswordName } from '../../actions/auth'

export const RegisterScreen = () => {

    const dispatch = useDispatch()
    const { msgError } = useSelector(state => state.ui)
   

    const [formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    })
    
    const { name, email, password, password2 } = formValues

    const handleRegister = (e) => {
        e.preventDefault()
        if( isFormValid() ) {
            dispatch( startRegisterWithEmailPasswordName(email, password, name) )
        } 
    }

    const isFormValid = ( ) => {

        if( name.trim().length === 0 ){
           dispatch(setError('name is not valid'))
            return false
        } else if ( !validator.isEmail( email ) ){
            dispatch( setError('email is not valid'))
            return false
        } else if (password !== password2 || password2.length < 5) {
           dispatch(setError('password is invalid'))
            return false
        }

        dispatch( removeError());
        return true
    }




    return (
        <>
        <h3 className="auth__title">Register</h3>

        <form onSubmit={handleRegister}>
            
            {
            msgError && 
                <div className="auth__alert-error">
                    {msgError} 
                </div>
            }

            <input
                type="text"
                placeholder="Name"
                name="name"
                className="auth__input"
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }
            />

            <input
                type="text"
                placeholder="Email"
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

            <input
                type="password"
                placeholder="Confirm password"
                name="password2"
                className="auth__input"
                autoComplete="off"
                value={ password2 }
                onChange={ handleInputChange }
            />


            <button
            className="btn btn-primary btn-block mb-5"
            type="submit"
            >
                Register
            </button>

            
            <Link
                to="/auth/login"
                className="link mt-5"
            >
                Already registered?
            </Link>
        </form>
    </>
    )
}
