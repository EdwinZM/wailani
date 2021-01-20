import React, { Fragment } from 'react'
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from './Backdrop'

const sideDrawer = props => {

  let attachedClasses = [classes.SideDrawer, classes.Closed]
  if (props.show) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.closed}/>
       <nav className={attachedClasses.join(' ')}>
         <NavigationItems/>
       </nav>
    </Fragment>
  )
}

export default sideDrawer;