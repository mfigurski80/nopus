import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'; // https://styled-components.com/

const LoginButton = (props) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
        <Button onClick={() => loginWithRedirect()} {...props}>
            Log In
        </Button>
        )
    )
}

const Button = styled.button`
    background: var(--color-primary);
    color: #fff;
    border-radius: 7px;
    padding: 12px 23px;
    &:hover {
        background: var(--color-primary-dark);
    }
`

export default LoginButton
