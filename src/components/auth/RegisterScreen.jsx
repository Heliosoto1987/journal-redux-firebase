//vendor
import React from 'react'
//router
import { Link } from 'react-router-dom'
//custom hook
import { useForm } from '../../hooks/useForm'

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
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(password2)
       
    }


    return (
        <>
        <h3 className="auth__title">Register</h3>

        <form onSubmit={handleRegister}>

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
