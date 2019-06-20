import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./IdeaForm.module.css";
import configs from "../../configs";

const textAreaRows = 5;
const textAreaCols = 20;

class IdeaForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { ...props.idea };
    this.titleInput = React.createRef();
    this.focusOnTarget = this.focusOnTarget.bind(this);
  }

  // this diversion allows enzyme snapshot testing to work with React.createRef()
  // for more reading https://medium.com/@fabianterh/fixing-typeerror-cannot-read-property-property-of-null-in-react-test-renderer-d91d45137de9
  focusOnTarget() {
    this.titleInput.current.focus();
  }

  componentDidMount() {
    this.focusOnTarget();
  }

  render() {
    const { title, description } = this.state;

    return (
      <form className={styles.wrapper} onSubmit={this.submitHandler}>
        <label className={styles.label}>
          Title:
          <input
            className={styles.input}
            placeholder="title"
            name="title"
            value={title}
            onChange={this.changeHandler}
            ref={this.titleInput}
          />
        </label>
        <label className={styles.label}>
          Description: <br />
          <textarea
            className={styles.textArea}
            placeholder="description"
            name="description"
            rows={textAreaRows}
            cols={textAreaCols}
            value={description}
            onChange={this.changeHandler}
            maxLength={configs.descriptionMaxChars}
          />
        </label>
        <button className={styles.button} type="submit">
          Save
        </button>
      </form>
    );
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onSubmit && this.props.onSubmit(this.state);
  };
}

IdeaForm.propTypes = {
  idea: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.number.isRequired,
    new: PropTypes.bool
  }).isRequired,
  onSubmit: PropTypes.func
};

export default IdeaForm;
