import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

export default function LoginPage() {
    const { isLoading } = useAuth0();
    if (isLoading) return <div>Loading ...</div>
    return (
        <>
            <h1>Login Stuff</h1>
            <p>This is a small login and style demo</p>
            <LoginButton />
            <LogoutButton />
            <Profile />
        </>
    )
}