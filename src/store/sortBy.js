import { createSlice } from "redux-starter-kit";

export const sortEnum = { date: "date", alphabetical: "alphabetical" };

const sortBy = createSlice({
  initialState: sortEnum.date,
  reducers: {
    setSortBy: (state, { payload }) => payload
  }
});

export default sortBy;
