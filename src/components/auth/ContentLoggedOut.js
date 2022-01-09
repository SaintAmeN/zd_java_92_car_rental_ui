import classes from "../../App.module.css";
import {Route, Switch} from "react-router-dom";
import AppContentHome from "../AppContentHome";
import React from "react";
import Auth from "./Auth";
import AppHeaderLoggedOut from "../AppHeaderLoggedOut";

const ContentLoggedOut = () => {
    return (
        <>
            <AppHeaderLoggedOut/>
            <div className={classes.AppContent}>
                <Switch>
                    <Route path={'/auth'}>
                        <Auth/>
                    </Route>
                    <Route path={'/'}>
                        <AppContentHome/>
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default ContentLoggedOut;