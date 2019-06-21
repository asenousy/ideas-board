import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AddTile.module.css";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export const AddTile = props => {
  return (
    <button className={styles.wrapper} onClick={props.onClick} aria-label="new">
      <FontAwesomeIcon className={styles.add} icon={faPlusCircle} size="3x" />
    </button>
  );
};

AddTile.propTypes = {
  onClick: PropTypes.func
};

export default React.memo(AddTile);
