import { Action, combineReducers } from 'redux';

const rootReducer = combineReducers({
  myModule: (state: any, action: Action<any>) => {
    switch (action.type) {
      default:
        return {...state, ...action};
    }
  },
});

export { rootReducer };
