import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const sideDrawer = props => {

  let attachedClasses = [classes.SideDrawer, classes.Closed]
  if (props.show) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <nav className={attachedClasses.join(' ')}>
        <NavigationItems/>
    </nav>
  )
}

export default sideDrawer