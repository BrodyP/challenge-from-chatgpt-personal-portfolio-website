import SectionTopic from "../share-component/section-topic";
import ProjectCard from "./project-card";
import classes from "./project-section.module.css";

interface ProjectSectionProps {
  id: string;
}

function ProjectSection(props: ProjectSectionProps) {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolores quod consectetur.";

  const projects = [
    {
      img: "https://images.unsplash.com/photo-1703192163759-316babf88c76?q=80&w=2844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      des: description,
      name: "2024 project",
    },
    {
      img: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      des: description,
      name: "Crypto service",
    },
    {
      img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      des: description,
      name: "AI project",
    },
    // add more projects as needed
  ];

  return (
    <section id={props.id}>
      <SectionTopic
        title="Project"
        content="Let's know what I have been done"
      />

      <div className={classes.projectContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.img}
            description={project.des}
            projectName={project.name}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
