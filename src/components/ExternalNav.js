import {
    Link
} from "react-router-dom";

/**
 * ExternalNav component is used to render 'navbar' for external
 * pages, i.e, those that *do not* require a user login and aren't
 * associated with specific user data
 * We'll have a separate navbar for internal pages probably
 * @returns {React.Component}
 */
export default function ExternalNav() {
    return <div>
        <h1>External Nav Component</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
    </div>
}