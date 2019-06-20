import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Tile from "../Tile/Tile";
import { sortEnum } from "../../store";

export class TilesList extends PureComponent {
  render() {
    return this.props.ideas
      .slice()
      .sort(this.compare)
      .map(idea => <Tile key={idea.id} idea={idea} />);
  }

  compare = (a, b) => {
    if (this.props.sortBy === sortEnum.date) {
      return b.date - a.date;
    } else {
      const nameA = a.title.toLowerCase();
      const nameB = b.title.toLowerCase();
      if (!nameA || nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
  };
}

TilesList.propTypes = {
  ideas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.number.isRequired,
      new: PropTypes.bool.isRequired
    })
  ).isRequired,
  sortBy: PropTypes.oneOf([sortEnum.date, sortEnum.alphabetical]).isRequired
};

export default connect(state => ({
  ideas: state.ideas,
  sortBy: state.sortBy
}))(TilesList);
