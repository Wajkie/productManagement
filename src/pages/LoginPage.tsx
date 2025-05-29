import React from 'react'
import { LoginUser } from '../services/user_API'
import type { NewUser } from '../types/userType'
import LoginUserForm from '../components/Forms/LoginUserForm'
type LoginPageProps = {
    loggedIn: (userName: string) => void;
}
const LoginPage: React.FC<LoginPageProps> = ({ loggedIn }) => {
    const addUser = async (user: NewUser) => {
        try {
            const userdata = await LoginUser(user);

            loggedIn(userdata.username)
        } catch (err) {
            console.log(err)
            loggedIn("false");
        }
    }
    return (
        <LoginUserForm logInUser={(user) => addUser(user)} />
    )
}

export default LoginPage