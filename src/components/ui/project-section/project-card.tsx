import classes from "./project-card.module.css";

interface ProjectCardProps {
  image: string;
  projectName: string;
  description: string;
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <div className={classes.card}>
      <img src={props.image} alt={props.projectName + " image"} />
      <div className={classes.cardContent}>
        <h3>{props.projectName}</h3>
        <p>{props.description}</p>
      </div>

      <a href="#" className={classes.btn}>
        Explore Project
      </a>
    </div>
  );
}

export default ProjectCard;
