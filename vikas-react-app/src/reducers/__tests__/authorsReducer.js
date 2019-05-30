import authorsReducer, { initialState } from '../authorsReducer';

describe('test author reducer', () => {
  it('description', () => {
    expect(authorsReducer(undefined, {})).toEqual(initialState);

    const state = [
      {
        id: 'cory-house',
        firstName: 'Cory',
        lastName: 'House',
      },
    ];

    expect(authorsReducer(undefined, { type: 'FETCH_AUTHORS_SUCCESS', payload: state })).toEqual(
      state,
    );
  });
});
