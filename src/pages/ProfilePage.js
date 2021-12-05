import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from 'components/LoginButton';
import LogoutButton from 'components/LogoutButton';
import Profile from 'components/Profile';

export default function ProfilePage() {
    const { isLoading } = useAuth0();
    if (isLoading) return <div>Loading ...</div>
    return (
        <>
            <h1>Profile</h1>
            <LoginButton />
            <Profile />
        </>
    )
}
