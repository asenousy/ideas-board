import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./Header.module.css";
import { actions, sortEnum } from "../../store";
const { setSortBy } = actions;

export class Header extends PureComponent {
  render() {
    const { sortBy } = this.props;

    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Ideas Board:</h1>
        <label className={styles.label}>
          Sort by:
          <select
            className={styles.select}
            value={sortBy}
            onChange={this.handleChange}
          >
            <option value={sortEnum.date}>{sortEnum.date}</option>
            <option value={sortEnum.alphabet}>{sortEnum.alphabet}</option>
          </select>
        </label>
      </div>
    );
  }

  handleChange = e => {
    this.props.setSortBy && this.props.setSortBy(e.target.value);
  };
}

Header.propTypes = {
  sortBy: PropTypes.oneOf([sortEnum.date, sortEnum.alphabet]).isRequired,
  setSortBy: PropTypes.func
};

export default connect(
  state => ({ sortBy: state.sortBy }),
  { setSortBy }
)(Header);
