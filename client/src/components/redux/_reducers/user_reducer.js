import { REGISTER, LOGIN } from '../_actions/types';

const initialState = {
  isAuthenticated: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
      };
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: {
          username: action.payload.username,
        },
      };
    default:
      return state;
  }
}
