import courseData from '../../Fakedata/courseData.json';
export const setUserInfo = payload => {
  return {
    type: 'SET_USER_INFO',
    payload: payload,
  };
};
export const loadCourseData = payload => {
  return {
    type: 'LOAD_COURSE_DATA',
    payload: payload,
  };
};
export const middleware = payload => {
  return dispatch => {
    dispatch(loadCourseData(courseData));
  };
};
export const setEnrolledCourse = payload => {
  return {
    type: 'SET_ENROLLED_COURSE',
    payload: payload,
  };
};
