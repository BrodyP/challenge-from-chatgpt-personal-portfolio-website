import React from "react";
import classes from "./section-topic.module.css";

interface SectionTopicProps {
  title: string;
  content: string;
}

const SectionTopic = (props: SectionTopicProps) => {
  return (
    <div className={classes.sectionTopic}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
};

export default SectionTopic;
