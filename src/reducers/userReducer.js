import Types from 'src/actions/actionTypes';

let initialState = {
  count: 0,
  users: []
};

export default function userReducer(state = initialState, action) {
  console.log('userReducer', action.type );
  switch( action.type ) {
    case Types.LOAD_USERS_SUCCESS:
      return {
        count: action.payload.total_count,
        users: [ ...state.users, ...action.payload.items ]
      };
    case Types.LOAD_USERS_ERROR:
      return state;
    case Types.RESET:
      return initialState;
    default:
      return state;
  }
}



