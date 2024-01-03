import { useEffect, useState } from "react";
import classes from "./main-navigation.module.css";
import NavButton from "./nav-button";

function MainNavigation() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const linkHandle = () => {
    const mbNav = document.querySelector(`.${classes.mobileNav}`);
    if (mbNav) mbNav.classList.remove(classes.open);
    setOpenMobileNav(false)
  };
  const navItems = () => (
    <ul>
      <li>
        <a onClick={linkHandle} href="#hero">
          Home
        </a>
      </li>
      <li>
        <a onClick={linkHandle} href="#about">
          About
        </a>
      </li>
      <li>
        <a onClick={linkHandle} href="#project">
          Project
        </a>
      </li>
      <li>
        <a onClick={linkHandle} href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );

  useEffect(() => {
    const mbNav = document.querySelector(`.${classes.mobileNav}`);
    if (mbNav) {
      if (openMobileNav) {
        mbNav.classList.add(classes.open);
      } else {
        mbNav.classList.remove(classes.open);
      }
    }
  }, [openMobileNav]);

  return (
    <div className={classes.nav}>
      <nav>
        <div className={classes.actions}>
          <a href="/">
            <h1>John</h1>
          </a>
          <div className={classes.btnMobile} >
            <NavButton setIsOpen={()=>setOpenMobileNav(!openMobileNav)} isOpen={openMobileNav} />
          </div>
          {navItems()}
        </div>
      </nav>
      <div className={classes.mobileNav}>{navItems()}</div>
    </div>
  );
}

//(Home, About, Projects, Contact)

export default MainNavigation;
