// import { combineReducers } from 'redux';

// import cadUsers from './cadUsers';

// export default combineReducers({
//   users: cadUsers,
// });

import { combineReducers } from 'redux';
import loginReducer from './login';
import registerReducer from './register';

const rootReducers = combineReducers({ registerReducer, loginReducer });

export default rootReducers;