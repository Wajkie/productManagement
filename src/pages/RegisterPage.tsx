import React from 'react'
import NewUserForm from '../components/Forms/NewUserForm'
import { RegisterUser } from '../services/user_API'
import type { NewUser } from '../types/userType'

const RegisterPage = () => {
    const addUser = async (user: NewUser) => {
        await RegisterUser(user)
    }
    return (
        <NewUserForm submitNewUser={(newUser) => addUser(newUser)} />
    )
}

export default RegisterPage