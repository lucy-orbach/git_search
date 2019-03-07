import types from 'src/constants/actionTypes';

const initialState = { repos: [], page: 1 };

export default (state = initialState, action) => {
  switch(action.type) {
    case types.GET_USERS_SUCCESS:
      console.log(action);
      return state;
    case types.GET_USERS_ERROR:
      console.log(action);
      return state;
    case types.RESET:
      console.log(action);
      return state;
    default:
      return state;
  }
}