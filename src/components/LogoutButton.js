import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import styled from 'styled-components'; // https://styled-components.com/

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <Button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
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

export default LogoutButton
