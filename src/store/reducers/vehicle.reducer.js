import {
  PROFILE,
  VEHICLE_LIST,
  VEHICLE_LIST_ERROR,
  VEHICLE_LIST_LOADING,
  VEHICLE_LIST_SUCCESS,
} from '../types';

const initState = {
  vehicleList: [],
  loading: false,
  error: '',
};

export const vehicleReducer = (state = initState, action) => {
  switch (action.type) {
    case VEHICLE_LIST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case VEHICLE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        vehicleList: action.payload,
      };
    case VEHICLE_LIST_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
