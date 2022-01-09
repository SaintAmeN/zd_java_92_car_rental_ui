import CardComponent from "../CardComponent";
import AppHeaderLoggedIn from "../AppHeaderLoggedIn";
import classes from "../../App.module.css";
import {Route, Switch} from "react-router-dom";
import AppContentForm from "../AppContentForm";
import AppContentDatabase from "../AppContentDatabase";
import AppContentHome from "../AppContentHome";
import React from "react";
import Logout from "./Logout";

const ContentLoggedIn = () => {
    return (
        <>
            <AppHeaderLoggedIn/>
            <div className={classes.AppContent}>
                <Switch>
                    <Route path={'/logout'}>
                        <Logout/>
                    </Route>
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
        </>
    )
}

export default ContentLoggedIn;