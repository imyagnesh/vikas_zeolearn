const initialState = [];

export default (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case 'FETCH_AUTHORS_SUCCESS':
      return payload;

    default:
      return state;
  }
};
