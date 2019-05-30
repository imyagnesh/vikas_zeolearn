import * as types from '../constants/actionTypes';

export const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${types.FETCH}_${types.COURSES}_${types.SUCCESS}`:
      return payload;

    case `${types.DELETE}_${types.COURSES}_${types.SUCCESS}`:
      return state.filter(x => x.id !== payload.id);

    case `${types.SAVE}_${types.COURSES}_${types.SUCCESS}`:
      return [payload, ...state];

    case `${types.EDIT}_${types.COURSES}_${types.SUCCESS}`: {
      const index = state.findIndex(x => x.id === payload.id);
      const updatedCourses = [...state.slice(0, index), payload, ...state.slice(index + 1)];
      return updatedCourses;
    }

    default:
      return state;
  }
};
