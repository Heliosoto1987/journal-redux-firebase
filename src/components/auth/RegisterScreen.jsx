//vendor
import React from 'react'
//router
import { Link } from 'react-router-dom'
//custom hook
import { useForm } from '../../hooks/useForm'
//library
import validator from 'validator'

export const RegisterScreen = () => {

    const [formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: typeof(Number),
        password2: typeof(Number),
    })
    
    const { name, email, password, password2 } = formValues

    const handleRegister = (e) => {
        e.preventDefault()
        if( isFormValid() ) {

        } 
    }

    const isFormValid = ( ) => {

        if( name.trim().length === 0 ){
            console.log('Name is requerid')
            return false
        } else if ( !validator.isEmail( email ) ){
            console.log('email is not valid')
            return false
        } else if (password !== password2 || password2.length < 5) {
            console.log('password is invalid')
            return false
        }

        return true
    }




    return (
        <>
        <h3 className="auth__title">Register</h3>

        <form onSubmit={handleRegister}>

            <div className="auth__alert-error">
                Hola Mundo
            </div>

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
