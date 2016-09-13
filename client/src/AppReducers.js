import { OAUTH_LOADED, LOGIN, LOGOUT } from './WeekNoteActions'

const initialState = {
  // Whether the week note editor is active.
  auth: null,
  currentUser: null
};
 
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case OAUTH_LOADED:
      return { 
        auth: action.auth,
        currentUser: action.user || null
      };
    case LOGIN:
      return Object.assign({}, state, {
        currentUser: action.user 
      });
    case LOGOUT:
      return Object.assign({}, state, {
        currentUser: null
      });
    default:
      return state;
  }
}
