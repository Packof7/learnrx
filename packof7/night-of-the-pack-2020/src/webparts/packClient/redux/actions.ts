import { Action } from 'redux';

interface AppAction extends Action {
  payload: any;
}

export const FETCH_USER_ACTION: AppAction = {
  type: "FETCH_USER",
  payload: {}
};
