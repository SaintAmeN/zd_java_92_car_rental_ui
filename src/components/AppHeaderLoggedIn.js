import classes from "./AppHeader.module.css";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

import Storage from '@material-ui/icons/Storage'
import AddComment from '@material-ui/icons/AddComment'
import logo from "../logo.svg";

const HEADER_BUTTONS = [
    {
        name: 'Logout', /* Link do formularza */
        href: '/logout',
        icon: (<></>),  /* Brak ikony */
    },
    {
        name: 'Form', /* Link do formularza */
        href: '/form',
        icon: (<AddComment fontSize={"small"}/>),
    },
    {
        name: 'Database', /* Link do tablicy z listą rekordów/danych */
        href: '/database',
        icon: (<Storage fontSize={"small"}/>),
    },
    {
        name: 'Home',
        href: '/',
        icon: (<></>),  /* Brak ikony */
    },
]

const AppHeaderLoggedIn = (props) => {

    const mapToHeaderButton = (buttonInfo) => {
        return (
            /* Link zostanie zastąpiony/zaprezentowany w postaci <a> */
            <Link key={buttonInfo.name} to={buttonInfo.href} className={classes.HeaderMenuButton}>
                {buttonInfo.icon}
                <div>{buttonInfo.name}</div>
            </Link>
        )
    }

    return (
        <header className={classes.AppHeader}>
            <div className={classes.HeaderLeft}>
                <img src={logo} className={classes.AppLogo} alt="logo"/>
            </div>
            <div className={classes.HeaderRight}>
                {
                    HEADER_BUTTONS.map(mapToHeaderButton)
                }
                <div className={classes.UsernameHeaderDiv}>
                    Logged in as: {props.authenticatedUsername} [{props.authenticatedUserId}] [{props.authenticatedUserAdmin?'A':'U'}]                </div>
            </div>
        </header>
    );
}

const mapStateToProps = state => {
        return {
            authenticatedUsername: state.auth.username,
            authenticatedUserAdmin: state.auth.admin,
            authenticatedUserId: state.auth.id
        };
    }
;

export default connect(mapStateToProps, null)(AppHeaderLoggedIn);