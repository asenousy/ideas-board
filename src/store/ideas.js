import { createSlice } from "redux-starter-kit";
import { sanitize } from "dompurify";

const todoSlice = createSlice({
  initialState: [],
  reducers: {
    addIdea: (state, { payload }) => [...state, payload],
    updateIdea: (state, { payload }) =>
      state.map(idea =>
        idea.id === payload.id
          ? {
              id: idea.id,
              // sanitizing user input for xss,
              // even though react render does sanitize it,
              //but in case this data will be passed somewhere in future
              title: sanitize(payload.title),
              description: sanitize(payload.description),
              date: payload.date,
              new: false
            }
          : idea
      ),
    deleteIdea: (state, { payload }) =>
      state.filter(idea => idea.id !== payload.id)
  }
});

export default todoSlice;
