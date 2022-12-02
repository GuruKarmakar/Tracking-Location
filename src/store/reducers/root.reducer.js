import {combineReducers} from 'redux';
import {ROOT} from '../types';
import {profileReducer} from './profile.reducer';
import {vehicleReducer} from './vehicle.reducer';

const initValue = {
  root: 'root',
};

const rootReducer = (state = initValue, action) => {
  switch (action.type) {
    case ROOT:
      return 'root state';

    default:
      return state;
  }
};

export const rootReducers = combineReducers({
  root: rootReducer,
  profile: profileReducer,
  vehicleList: vehicleReducer,
});
