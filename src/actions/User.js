import { CHANGE_USER } from "./types";

export const changeUser = (payload) => {
  return {
    type: CHANGE_USER,
    payload
  };
};