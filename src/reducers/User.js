import { CHANGE_USER } from './../actions/types';

let initialState = {
  loginUser: {
    name: "John Doe",
    abbr: "JD"
  }
}

export default function UserReducer(state = initialState, action) {
  console.log(state, "state");
  switch (action.type) {
    case CHANGE_USER: 
      return {
        ...state,
        loginUser: action.payload
      };
    default:
      return state;
  };
};