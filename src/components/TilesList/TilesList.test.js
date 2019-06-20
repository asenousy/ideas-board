import React from "react";
import { shallow } from "enzyme";
import { TilesList } from "./TilesList";
import { sortEnum } from "../../store";

it("renders without crashing", () => {
  const wrapper = shallow(<TilesList sortBy={sortEnum.date} ideas={[]} />);
  expect(wrapper).toMatchSnapshot();
});

it("sort ideas by date", () => {
  const wrapper = shallow(
    <TilesList
      sortBy={sortEnum.date}
      ideas={[
        { id: "1", date: 111, new: false },
        { id: "2", date: 999, new: false }
      ]}
    />
  );
  expect(wrapper.get(0).props.idea.id).toBe("2");
  expect(wrapper.get(1).props.idea.id).toBe("1");
});

it("sort ideas Alphabetically", () => {
  const wrapper = shallow(
    <TilesList
      sortBy={sortEnum.date}
      ideas={[
        { id: "1", title: "bbb", date: 111, new: false },
        { id: "2", title: "aaa", date: 222, new: false }
      ]}
    />
  );
  expect(wrapper.get(0).props.idea.id).toBe("2");
  expect(wrapper.get(1).props.idea.id).toBe("1");
});
