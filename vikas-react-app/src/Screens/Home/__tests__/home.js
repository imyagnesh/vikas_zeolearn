import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../home';
import CourseList from '../courseList';
import About from '../../About/about';

configure({ adapter: new Adapter() });

const defaultProps = {
  courses: [],
  authors: [],
  loading: false,
  editCourse: jest.fn(),
  saveCourses: jest.fn(),
  deleteCourses: jest.fn(),
  fetchAuthors: jest.fn(),
  fetchCourses: jest.fn(),
};

const setup = properties => {
  const props = { ...defaultProps, ...properties };

  const Wrapper = shallow(<Home {...props} />);
  return {
    props,
    Wrapper,
  };
};

/* eslint-disable no-undef */
const sum = (a, b) => a + b;

describe('Home page', () => {
  it('sum', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});

describe('test home page', () => {
  it('check loading Available', () => {
    const { Wrapper } = setup();
    const loading = Wrapper.find('h1');
    expect(loading.exists()).toBe(false);

    const newProps = { ...defaultProps, loading: true };
    const { Wrapper: Wrapper1 } = setup(newProps);
    const loading1 = Wrapper1.find('h1');
    expect(loading1.text()).toEqual('Loading....');
  });

  it('check add todo button', () => {
    const { Wrapper } = setup();
    const addTodoButton = Wrapper.find('button').at(0);
    expect(addTodoButton.exists()).toBe(true);
    expect(addTodoButton.text()).toEqual('Add Button');
    addTodoButton.simulate('click');
    expect(Wrapper.state('open')).toBe(true);
    // console.log(Wrapper.instance().addRecord.mock.calls.length);
    // expect(Wrapper.instance().addRecord().mock.calls.length).toBe(1);
  });

  it('test course list', () => {
    const { Wrapper } = setup();
    const courseList = Wrapper.find(CourseList);
    expect(courseList.props()).toEqual({
      courses: [],
      deleteCourses: expect.any(Function),
      editRecord: expect.any(Function),
      renderAuthorName: expect.any(Function),
    });
  });

  it('check addTodo modal', () => {
    const { Wrapper } = setup();
    const dialog = Wrapper.find('dialog');
    expect(dialog.exists()).toBe(false);
    const addTodoButton = Wrapper.find('button').at(0);
    expect(addTodoButton.exists()).toBe(true);
    expect(addTodoButton.text()).toEqual('Add Button');
    addTodoButton.simulate('click');
    const dialog1 = Wrapper.find('dialog');
    expect(dialog1.exists()).toBe(true);
    const about = Wrapper.find(About);
    expect(about.exists()).toBe(true);
    expect(about.props()).toEqual({
      course: Wrapper.state('course'),
      onClose: expect.any(Function),
      saveAuthors: expect.any(Function),
      authorsData: [],
    });
  });
});
