import React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";
import { sortEnum } from "../../store";

it("renders without crashing", () => {
  const wrapper = shallow(<Header sortBy={sortEnum.date} />);
  expect(wrapper).toMatchSnapshot();

  wrapper.setProps({ sortBy: sortEnum.alphabet });
  expect(wrapper).toMatchSnapshot();
});

it("updates sort state when select changes", () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<Header sortBy={sortEnum.date} setSortBy={mockFn} />);
  wrapper
    .find("select")
    .simulate("change", { target: { value: sortEnum.date } });

  expect(mockFn).toHaveBeenCalledWith(sortEnum.date);
});
