import SET_USER from './index';

export default function userAction(users) {
  return {
    type: SET_USER,
    payload: {
      users,
    }
  }
}