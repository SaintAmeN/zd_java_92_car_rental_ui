import classes from './App.module.css';
import AppHeader from "./components/AppHeader";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AppContentHome from "./components/AppContentHome";
import AppContentDatabase from "./components/AppContentDatabase";
import AppContentForm from "./components/AppContentForm";

function App() {
    return (
        <div className={classes.App}>
            <Router>
                <AppHeader/>
                <div className={classes.AppContent}>
                    <Switch>
                        <Route path={'/form'}>
                            <AppContentForm/>
                        </Route>
                        <Route path={'/database'}>
                            <AppContentDatabase/>
                        </Route>
                        <Route path={'/'}>
                            <AppContentHome/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
