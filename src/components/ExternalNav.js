import {
    Link
} from "react-router-dom";
import styled from 'styled-components';

/**
 * ExternalNav component is used to render 'navbar' for external
 * pages, i.e, those that *do not* require a user login and aren't
 * associated with specific user data
 * We'll have a separate navbar for internal pages probably
 * @returns {React.Component}
 */
export default function ExternalNav() {
    return <Nav>
        <NavLinkImage to="/">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" width="51px" height="40px"/>
        </NavLinkImage>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/about">About</NavLink>
        <Spacer />
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Login</NavLink>
    </Nav>
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 80px;
`
const Spacer = styled.div`
    flex: 1;
`
const NavLink = styled(Link)`
    padding: 30px 20px;
    text-decoration: none;
    color: inherit;
    font-weight: bold;
`

const NavLinkImage = styled(NavLink)`
    padding-top: 0;
    padding-bottom: 0;
`