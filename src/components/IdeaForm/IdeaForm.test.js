import React from "react";
import { shallow } from "enzyme";
import IdeaForm from "./IdeaForm";

// this allows enzyme snapshot testing to work with React.createRef()
// for more reading https://medium.com/@fabianterh/fixing-typeerror-cannot-read-property-property-of-null-in-react-test-renderer-d91d45137de9
let focusOnTargetSpy = jest.fn();
jest
  .spyOn(IdeaForm.prototype, "focusOnTarget")
  .mockImplementation(focusOnTargetSpy);

jest.spyOn(Date, "now").mockImplementation(() => 111);

let wrapper;
beforeEach(
  () =>
    (wrapper = shallow(
      <IdeaForm
        idea={{
          id: "1",
          title: "title",
          description: "description",
          date: 111,
          new: true
        }}
      />
    ))
);

it("renders without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("submits new idea updated idea", () => {
  const mockFn = jest.fn();
  wrapper.setProps({ onSubmit: mockFn });
  wrapper
    .find("input")
    .simulate("change", { target: { name: "title", value: "updatedTitle" } });

  expect(wrapper.state("title")).toEqual("updatedTitle");

  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });

  expect(mockFn).toHaveBeenCalledWith({
    id: "1",
    title: "updatedTitle",
    description: "description",
    date: 111,
    new: true
  });
});
