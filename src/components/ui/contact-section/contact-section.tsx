import SectionTopic from "../share-component/section-topic";
import classes from "./contact-section.module.css";

interface ContactSectionProps {
  id: string;
}

function ContactSection(props: ContactSectionProps) {
  return (
    <section id={props.id}>
      <SectionTopic title="" content="" />

      <form className={classes.form}>
        <div className={classes.contactInfo}>
          <h3>Let's Connect</h3>
          <p>
            Thank you for visiting my portfolio website. I'd love to hear from
            you and have the opportunity to connect. Please don't hesitate to
            reach out using the contact form below. Whether you have a potential
            project in mind, questions about my work, or just want to say hello,
            I'm here to listen.
          </p>
        </div>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input required type="text" id="name" />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">E-mail</label>
            <input required type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="massage">Message</label>
            <textarea id="massage" />
          </div>
          <button className={classes.btn} type="submit">
            Send a Message
          </button>
        </div>
        <div className={classes.imgContainer}>
          <img src="/images/mail.png" alt="send mail to me" />
        </div>
      </form>
    </section>
  );
}

export default ContactSection;
