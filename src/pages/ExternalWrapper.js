import { Outlet } from 'react-router-dom'
import ExternalNav from 'components/ExternalNav';

export default function ExternalWrapper() {
    return (
        <>
            <ExternalNav />
            <Outlet />
        </>
    );
}