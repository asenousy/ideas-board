import React from "react";
import { shallow } from "enzyme";
import Idea from "./Idea";

let wrapper;
beforeEach(() => (wrapper = shallow(<Idea />)));

it("renders without crashing", () => {
  wrapper.setProps({
    title: "title",
    descripton: "descrtiption",
    date: 1560981762261
  });
  expect(wrapper).toMatchSnapshot();
});
