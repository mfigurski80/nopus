import { Outlet } from 'react-router-dom'

export default function InternalWrapper() {
    return (
        <>
            <p>INTERNAL WRAPPER</p>
            <Outlet />
        </>
    )
}