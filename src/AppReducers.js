import { EDITOR_BLUR, EDITOR_FOCUS } from './WeekNoteActions'

const initialState = {
   // Whether the week note editor is active.
  isNoteEditorActive: false
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case EDITOR_BLUR:
      return { isNoteEditorActive: false };
    case EDITOR_FOCUS:
      return { isNoteEditorActive: true };
    default:
      return state;
  }
}
