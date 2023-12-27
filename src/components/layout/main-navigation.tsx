import classes from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <nav className={classes.nav}>
      <div className={classes.actions}>
        <a>
          <h1>John</h1>
        </a>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Project</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

//(Home, About, Projects, Contact)

export default MainNavigation;
