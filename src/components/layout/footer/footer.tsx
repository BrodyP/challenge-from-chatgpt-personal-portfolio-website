import classes from "./footer.module.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.devDetail}>
          <div className={classes.logo}>Logo</div>

          <p>John Doe</p>
          <div className={classes.email}>
            <p>E-mail</p>
            <a href="mailto:contact@examplemail.com">contact@examplemail.com</a>
          </div>
        </div>
        <div className={classes.sitemap}>
          <h3>Site Map</h3>

          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className={classes.social}>
          <h3>Social</h3>
          <div className={classes.socialIcons}>
            <SocialIcon url="https://twitter.com" />
            <SocialIcon url="https://facebook.com" />
            <SocialIcon url="https://linkedin.com" />
            <SocialIcon url="https://github.com" />
            <SocialIcon url="https://reddit.com" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
