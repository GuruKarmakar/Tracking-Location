import Apis from '../../services/apis';
import {
  VEHICLE_LIST_ERROR,
  VEHICLE_LIST_SUCCESS,
  VEHICLE_LIST_LOADING,
} from '../types';

export const getVehicleList = () => {
  return dispatch => {
    dispatch({type: VEHICLE_LIST_LOADING});
    Apis.VehicleObject()
      .then(result => {
        const ids = result?.map(i => i.imei);
        ids.map((imei, idx) => {
          Apis.VehicleObjectWithCoords({imei}).then(res => {
            dispatch({type: VEHICLE_LIST_LOADING});
            const key = Object.keys(res);
            const data = [...result];

            data[idx].lat = res[key].lat;
            data[idx].lng = res[key].lng;
            data[idx].plate_number = res[key]?.plate_number;
            data[idx].s2 = res[key]?.s2;
            data[idx].s1 = res[key]?.s1;
            data[idx].speed = res[key]?.speed;
            dispatch({type: VEHICLE_LIST_SUCCESS, payload: data});
          });
        });
      })
      .catch(err => {
        dispatch({type: VEHICLE_LIST_ERROR, payload: err});
      });
  };
};
