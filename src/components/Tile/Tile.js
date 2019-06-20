import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { actions } from "../../store";
import styles from "./Tile.module.css";
import Idea from "../Idea/Idea";
import IdeaForm from "../IdeaForm/IdeaForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
const { deleteIdea, updateIdea } = actions;

export class Tile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { editMode: props.idea.new };
  }

  render() {
    const { idea } = this.props;
    return (
      <div className={styles.wrapper} tabIndex="0">
        {this.state.editMode ? (
          <IdeaForm idea={idea} onSubmit={this.changeHandler} />
        ) : (
          <Idea
            title={idea.title}
            description={idea.description}
            date={idea.date}
          />
        )}
        {!this.state.editMode && (
          <FontAwesomeIcon
            className={styles.edit}
            icon={faEdit}
            size="lg"
            onClick={this.toggleEditMode}
            tabIndex="0"
            role="button"
            aria-label="edit"
          />
        )}
        <FontAwesomeIcon
          className={styles.delete}
          icon={faTrash}
          size="lg"
          onClick={this.deleteHandler}
          tabIndex="0"
          role="button"
          aria-label="delete"
        />
      </div>
    );
  }

  toggleEditMode = () => {
    this.setState(state => ({ editMode: !state.editMode }));
  };

  changeHandler = updatedIdea => {
    this.toggleEditMode();
    this.props.updateIdea && this.props.updateIdea(updatedIdea);
  };

  deleteHandler = () => {
    this.props.deleteIdea && this.props.deleteIdea(this.props.idea);
  };
}

Tile.propTypes = {
  idea: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.number.isRequired,
    new: PropTypes.bool.isRequired
  }).isRequired,
  deleteIdea: PropTypes.func,
  updateIdea: PropTypes.func
};

export default connect(
  null,
  { deleteIdea, updateIdea }
)(Tile);
