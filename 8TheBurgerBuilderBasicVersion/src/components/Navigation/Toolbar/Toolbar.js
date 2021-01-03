import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationsItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggole';


const Toolbar = props =>{
    return(
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.DrawerToggleClicked}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationsItems />
            </nav>
        </header>
    );
}

export default Toolbar;