import * as types from '../../constants/actionTypes';
import coursesReducer, { initialState } from '../coursesReducer';

describe('test author reducer', () => {
  it('description', () => {
    expect(coursesReducer(undefined, {})).toEqual(initialState);

    const state = [
      {
        title: 'title',
        courseURL: '',
        length: '5:08',
        category: 'react',
        country: '',
        state: '',
        watchHref: 'http://www.pluralsight com/courses/react-flux-building-applications',
        authorId: 'dan-wahlin',
        id: 'SmZG8VX',
      },
    ];

    expect(
      coursesReducer(undefined, {
        type: `${types.FETCH}_${types.COURSES}_${types.SUCCESS}`,
        payload: state,
      }),
    ).toEqual(state);

    expect(
      coursesReducer(state, {
        type: `${types.DELETE}_${types.COURSES}_${types.SUCCESS}`,
        payload: { id: 'SmZG8VX' },
      }),
    ).toEqual(initialState);

    expect(
      coursesReducer(undefined, {
        type: `${types.SAVE}_${types.COURSES}_${types.SUCCESS}`,
        payload: state[0],
      }),
    ).toEqual(state);

    expect(
      coursesReducer(undefined, {
        type: `${types.EDIT}_${types.COURSES}_${types.SUCCESS}`,
        payload: { ...state[0], title: 'title1' },
      }),
    ).toEqual([
      {
        title: 'title1',
        courseURL: '',
        length: '5:08',
        category: 'react',
        country: '',
        state: '',
        watchHref: 'http://www.pluralsight com/courses/react-flux-building-applications',
        authorId: 'dan-wahlin',
        id: 'SmZG8VX',
      },
    ]);
  });
});
