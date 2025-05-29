import React, { useState } from 'react'
import type { NewUser } from '../types/userType';
type NewUserFormProps = {
    logInUser: (newUser: NewUser) => void;
}

const LoginUserForm: React.FC<NewUserFormProps> = ({ logInUser }) => {
    const [inputUserName, setUserName] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newUser: NewUser = {
            username: inputUserName.trim(),
            password: inputPassword.trim()
        }
        logInUser(newUser);
    }



    return (
        <div><form onSubmit={handleSubmit}>
            <label>Username
                <input type='text' value={inputUserName} onChange={(e) => setUserName(e.target.value)} required />
            </label>
            <label>password
                <input type='text' required min={8} value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} />
            </label>
            <button type="submit" disabled={inputUserName.trim().length < 3 || inputPassword.trim().length < 8}>Login</button>
        </form></div>
    )
}

export default LoginUserForm