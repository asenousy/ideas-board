import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./App.module.css";
import AddTile from "./components/AddTile/AddTile";
import TilesList from "./components/TilesList/TilesList";
import Header from "./components/Header/Header";
import { actions } from "./store";
const { addIdea } = actions;

export class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.tiles}>
          <AddTile onClick={this.addhandler} />
          <TilesList />
        </div>
      </div>
    );
  }

  addhandler = () => {
    this.props.addIdea();
  };
}

export default connect(
  null,
  { addIdea }
)(App);
