import React from "react";
import { shallow, mount } from "enzyme";
import { Tile } from "./Tile";

const idea = {
  id: "1",
  title: "title",
  description: "description",
  date: 111,
  new: false
};

it("renders without crashing", () => {
  const wrapper = shallow(<Tile idea={idea} />);
  expect(wrapper).toMatchSnapshot();
});

it("it should toggle to edit mode and show form", () => {
  const wrapper = mount(<Tile idea={idea} />);
  const edit = wrapper.find("FontAwesomeIcon").at(0);
  expect(wrapper.find("form").exists()).toBe(false);
  edit.simulate("click");
  expect(wrapper.state("editMode")).toBe(true);
  expect(wrapper.find("form").exists()).toBe(true);
});
