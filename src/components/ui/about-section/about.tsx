import SectionTopic from "../share-component/section-topic";
import classes from "./about.module.css";

interface AboutSectionProps {
  id: string;
}

function AboutSection(props: AboutSectionProps) {
  return (
    <section id={props.id}>
      <SectionTopic title="About" content="Let's know me" />
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img src="/images/bio1.jpeg" alt="french bulldog developer" />
        </div>
        <div className={classes.contentContainer}>
          <h3>Background</h3>
          <p>
            I am a self-taught developer who swapped the heat of the kitchen for
            the heat of the compiler. From serving up dishes in the hospitality
            industry, I now serve up delicious lines of code. My passion for
            learning and creating hasn't changed, it's just the ingredients that
            are different. Currently, I'm cooking up a few exciting projects and
            hunting for my first developer role, ready to bring a unique flavor
            to the tech industry.
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
