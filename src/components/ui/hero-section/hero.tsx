import classes from "./hero.module.css";

function HeroSection() {
  return (
    <section>
      <div className={classes.hero}>
        <div className={classes.introText}>
          <h1>John Doe</h1>
          <p>
            Passionate and versatile Fullstack Developer with a keen eye
            for creating intuitive and dynamic web applications. My journey in
            the world of technology has led me to develop a wide range of skills
            that enable me to build robust and engaging digital experiences.
          </p>
        </div>
        <div>
          <img src="/images/hero.png" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
