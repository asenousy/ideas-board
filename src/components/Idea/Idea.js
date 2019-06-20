import React from "react";
import PropTypes from "prop-types";
import styles from "./Idea.module.css";

const titlePlaceHolder = "untitled";

export const Idea = props => {
  const { title, description, date } = props;

  return (
    <div className={styles.wrapper}>
      <h3>{title || titlePlaceHolder}</h3>
      <p>{description}</p>
      <div className={styles.date}>
        {new Date(date)
          .toTimeString()
          .split(" ")
          .shift()}
      </div>
    </div>
  );
};

Idea.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.number
};

export default React.memo(Idea);
