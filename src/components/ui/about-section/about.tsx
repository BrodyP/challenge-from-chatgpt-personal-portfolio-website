import classes from "./about.module.css";

function AboutSection() {
  return (
    <section>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img src="/images/bio1.jpeg" alt="french bulldog developer" />
        </div>
        <div className={classes.contentContainer}>
          <h3>Background</h3>
          <p>
            I am a self-taught developer with a background in the hospitality
            industry. I have a passion for learning and creating. I am currently
            working on a few projects and looking for my first developer role.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas distinctio laboriosam nam consequuntur placeat, et
            voluptates ratione autem perspiciatis vitae minus nihil in sequi
            quis maiores molestiae vero possimus?
          </p>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.contentContainer}>
          <h3>Experience</h3>
          <p>
            As a Frontend Developer for 5 years, I've focused on React.js and
            Next.js, building and maintaining large-scale web applications. I've
            used SSR and SSG in Next.js for improved SEO and performance, and
            leveraged Next.js API routes for backend functionality. My React
            expertise includes hooks, context API, component lifecycle, and
            state management with Redux, MobX, React Query, and SWR. I've worked
            with styled-components, CSS modules, and testing libraries like Jest
            and React Testing Library. I continuously learn new technologies and
            best practices.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <img src="/images/exp.png" alt="french bulldog developer" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
