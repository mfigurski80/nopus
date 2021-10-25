// packages
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"; // https://reactrouter.com/web/guides/quick-start
// NOTE: we're using v6.0, which is alpha and has breaking changes from ^^
// so also look at https://ui.dev/react-router-nested-routes/

// components
import ProfilePage from 'pages/ProfilePage';
import LandingPage from 'pages/LandingPage';
import AboutPage from "pages/AboutPage";
import SchedulePage from "pages/SchedulePage";
import NotFoundPage from "pages/NotFoundPage";

import InternalWrapper from "pages/InternalWrapper";
import ExternalWrapper from "pages/ExternalWrapper";
// styles?
import { CssBaseline } from "@material-ui/core";


function App() {
    return (
        <CssBaseline style={{height: '100vh'}}>
            <Router>
                <Routes>
                    {/* Internal Pages */}
                    <Route path="/user/*" element={<InternalWrapper />}>
                        <Route path="profile" element={<ProfilePage />} />
                        <Route path="schedule" element={<SchedulePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                    {/* External Pages */}
                    <Route path="/*" element={<ExternalWrapper />}>
                        <Route exact path="" element={<LandingPage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Router>
        </CssBaseline>
    );
}

export default App;
