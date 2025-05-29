import React, { useState } from 'react'
import type { NewUser } from '../../types/userType';
import { Form, Button } from 'react-bootstrap';
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
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    value={inputUserName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    minLength={8}
                    required
                />
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                disabled={inputUserName.trim().length < 3 || inputPassword.trim().length < 8}
            >
                Login
            </Button>
        </Form>
    )
}

export default LoginUserForm;