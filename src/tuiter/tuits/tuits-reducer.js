import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const Tuits = {
  "userName": "SpaceX",
  "handle": "@spacex",
  "image": "spacex.png",
  "topic": "Space",
  "time": "2h",
  "liked": true,
  "replies": 123,
  "retuits": 234,
  "likes": 456,
}


const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuits,
  reducers: {
    updateLikes: (state, action) => {
      state.tuits = action.payload;
    },
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...Tuits,
        _id: (new Date()).getTime(),
      })
    },
    deleteTuit(state, action) {
      const index = state
      .findIndex(tuit =>
        tuit._id === action.payload);
      state.splice(index, 1);
    },
  }
});

export default tuitsSlice.reducer;
export const {updateLikes, createTuit, deleteTuit} = tuitsSlice.actions;

