import { OAUTH_LOADED, LOGIN, LOGOUT } from './WeekNoteActions'

const initialState = {
  // Whether the week note editor is active.
  auth: null,
  currentUser: null,
  notes: {}
};

function convertNotesToMap(notes_response) {
  var notes_map = {};
  for (const note of notes_response) {
    notes_map[note.week_id] = note.contents;
  }
  return notes_map;
}
 
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case OAUTH_LOADED:
      return Object.assign({}, state, { 
        auth: action.auth,
        currentUser: action.user || null,
        notes: convertNotesToMap(action.notes)
      });
    case LOGIN:
      return Object.assign({}, state, {
        currentUser: action.user,
        notes: convertNotesToMap(action.notes)
      });
    case LOGOUT:
      return Object.assign({}, state, {
        currentUser: null
      });
    default:
      return state;
  }
}
