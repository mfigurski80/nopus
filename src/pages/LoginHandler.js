import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function LoginHandler({redirectTo}) {
    let navigate = useNavigate()
    const { isAuthenticated, isLoading, error } = useAuth0();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div><h4>An error has occured</h4>{error.message}</div>;

    if (isAuthenticated) navigate(redirectTo);
    else navigate('/');
    return null;
}