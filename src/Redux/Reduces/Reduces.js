const initialState = {
  userInfo: {},
  courseData: [],
  enrolledCourse: [],
};

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_INFO': {
      const newData = {
        ...state,
        userInfo: action.payload,
      };
      return newData;
    }
    case 'LOAD_COURSE_DATA': {
      const newData = {
        ...state,
        courseData: action.payload,
      };
      return newData;
    }
    case 'SET_ENROLLED_COURSE': {
      const notMatched = state.enrolledCourse.filter(
        cs => cs.id !== action.payload.id,
      );
      const newData = {
        ...state,
        enrolledCourse: [...notMatched, action.payload],
      };
      return newData;
    }
    default:
      return state;
  }
};
