import React from "react";
import { shallow } from "enzyme";
import AddTile from "./AddTile";

let wrapper;
beforeEach(() => (wrapper = shallow(<AddTile />)));

it("renders without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("calls onClick when click event", () => {
  const mockFn = jest.fn();
  wrapper.setProps({ onClick: mockFn });
  wrapper.simulate("click");
  expect(mockFn.mock.calls.length).toBe(1);
});
