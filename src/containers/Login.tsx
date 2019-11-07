import React, { FunctionComponent, useState, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../utils/context/AuthContext';


// Typed Components

type State = {
    resolved: boolean,
    loading: boolean,
    error?: string,
    status: boolean
}

// Styled Components

const initialState: State = {
    resolved: false,
    loading: true,
    status: false
}

const Title = styled.h1`
    font-size: 48px;
    line-height: 0;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 40%;
`;

const InputLabel = styled.label`
    font-size: 16px;
    color: #404044;
    margin-bottom: 8px;
`;

const Input = styled.input`
    font-size: 24px;
    outline: none;
    background: none;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid #404044;
    margin-bottom: 48px;
`;

const ButtonContainer = styled.div`
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const MessageContainer = styled.div`
    display:flex;
    justify-content:center;
    align-content:center;
    position:absolute;
    background:white;
    transform:translate(-50%, -50%);
    top:50%;
    left:50%;
    box-shadow:0px 16px 16px rgba(0, 0, 0, 0.25);
    border-radius:24px;
    width:300px;
    height:300px;
`
const Message = styled.p`
    font-size: 48px;
    line-height: 0;
    text-align:center;
`;


export const Login: FunctionComponent = () => {
    const [state, setState] = useState<State>(initialState);
    const [mail, setMail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const { dispatch } = useContext(AuthContext)

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setState({ loading: true, resolved: false, status: false })
        try {
            const response = await fetch(
                "http://localhost:8080/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: mail,
                        password: password
                    })
                }
            );
            const json = await response.json();
            if (response.ok) {
                setState({ loading: false, resolved: true, error: json.message, status: json.status })
                if (json.status) {
                    dispatch({ type: 'LOGIN', payload: json })
                }
            } else {
                setState({ loading: false, resolved: true, error: json.message, status: json.status })
            }
        } catch (error) {
            setState({ loading: false, resolved: false, error: error.message, status: false })
            console.error(error)
        }
    };

    return (
        <>

            <h1>Welcome</h1>
            <LoginForm onSubmit={handleSubmit}>
                <InputLabel>email</InputLabel>
                <Input
                    type="email"
                    required={true}
                    onChange={e => setMail(e.target.value)}
                />
                <InputLabel>password</InputLabel>
                <Input
                    type="password"
                    required={true}
                    onChange={e => setPassword(e.target.value)}
                />
                <ButtonContainer className="button-container">
                    <Input type="submit" value="login" />
                </ButtonContainer>
            </LoginForm>

            {!state.loading ? (<MessageContainer><Message>Loading...</Message></MessageContainer>) : <></>}
        </>
    )
}