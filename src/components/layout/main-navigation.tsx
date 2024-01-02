import classes from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <nav className={classes.nav}>
      <div className={classes.actions}>
        <a href="/">
          <h1>John</h1>
        </a>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

//(Home, About, Projects, Contact)

export default MainNavigation;
