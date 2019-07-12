import { combineReducers } from 'redux';

// Our custom reducers
// We need to import each one here and add them to the combiner at the bottom
import auth from './auth/reducer';
import user from './user/reducer';
import notification from './notification/reducer';
import report from './report/reducer';
// Combine all
const appReducer = combineReducers({
  auth,
  user,
  notification,
  report
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
