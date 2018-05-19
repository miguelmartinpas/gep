import { FETCH_USERS } from '../actions';

const posts = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS:
      console.log('reduceer oeoeooee', action);
      return action; // _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
};

export default posts;
