import Types from 'src/actions/actionTypes';




export const loadUsers = name => dispatch => {
  fetch(`https://api.github.com/search/users?q=${name}&page=2&per_page=10`)
    .then( response => response.json() )
    .then( data => {
      dispatch(loadUsersSuccess(data));
      dispatch( setUsername(name))
    })
    .catch(error => dispatch(loadUsersError(error)))
};

export function setUsername(name) {
  return {
    type: Types.SET_USER,
    payload: name
  }
};

export function loadUsersSuccess(data) {
  return {
    type: Types.LOAD_USERS_SUCCESS,
    payload: data
  }
};

export function loadUsersError(error) {
  return {
    type: Types.LOAD_USERS_ERROR,
    payload: error
  };
}

export const Reset = () => ({ type: Types.RESET });
