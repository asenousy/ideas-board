import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "redux-starter-kit";
import { shallow, mount } from "enzyme";
import ConnectedApp, { App } from "./App";
import { reducer } from "./store";

const renderWithState = (Element, preloadedState) =>
  mount(
    <Provider store={configureStore({ reducer, preloadedState })}>
      <Element />
    </Provider>
  );

it("renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

it("creates Tiles in List", () => {
  const wrapper = renderWithState(ConnectedApp);
  const addButton = wrapper.find("Memo(AddTile)");
  expect(wrapper.find("Tile")).toHaveLength(0);
  addButton.simulate("click");
  expect(wrapper.find("Tile")).toHaveLength(1);
});

it("deletes Tiles from List", () => {
  const wrapper = renderWithState(ConnectedApp, {
    ideas: [
      {
        id: "1",
        title: "title",
        description: "description",
        date: 111,
        new: false
      }
    ]
  });
  expect(wrapper.find("Tile")).toHaveLength(1);
  const removeButton = wrapper
    .find("Tile")
    .find("FontAwesomeIcon")
    .at(1);
  removeButton.simulate("click");
  expect(wrapper.find("Tile")).toHaveLength(0);
});
