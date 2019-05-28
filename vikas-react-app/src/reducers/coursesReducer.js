const initialState = {
  loading: false,
  data: [],
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_COURSES_REQUEST':
      return { ...state, loading: true };

    case 'FETCH_COURSES_SUCCESS':
      return { ...state, loading: false, data: payload };

    case 'SAVE_COURSES_REQUEST':
      return { ...state, loading: true };

    case 'DELETE_COURSES_SUCCESS':
      return { ...state, loading: false, data: state.data.filter(x => x.id !== payload.id) };

    case 'SAVE_COURSES_SUCCESS':
      return { ...state, loading: false, data: [payload, ...state.data] };

    case 'EDIT_COURSES_SUCCESS': {
      const index = state.data.findIndex(x => x.id === payload.id);
      const updatedCourses = [
        ...state.data.slice(0, index),
        payload,
        ...state.data.slice(index + 1),
      ];
      return { ...state, loading: false, data: updatedCourses };
    }

    case 'COURSES_FAIL':
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
