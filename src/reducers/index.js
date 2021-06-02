import { combineReducers } from 'redux';

import cadUsers from './cadUsers';

export default combineReducers({
  users: cadUsers,
});
