import React, { useState } from "react";
import MenuOutlineIcon from "./svg/menu-outline";
import classes from "./nav-button.module.css";
import CloseOutlineIcon from "./svg/close-outline";

interface NavButtonProps {
  isOpen: boolean;
  setIsOpen: () =>void
}

const NavButton: React.FC<NavButtonProps> = (props) => {

  return (
    <button onClick={props.setIsOpen} className={classes.navButton}>
      {props.isOpen ? <CloseOutlineIcon /> : <MenuOutlineIcon />}
    </button>
  );
};

export default NavButton;
