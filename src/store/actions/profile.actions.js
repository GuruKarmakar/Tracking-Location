import Apis from '../../services/apis';
import {PROFILE} from '../types';

export const getProfileData = (token, id) => {
  return dispatch => {
    dispatch({type: PROFILE.LOADING});

    Apis.GetProfile({token, id})
      .then(res => {
        dispatch({type: PROFILE.SUCCESS, payload: res.data[0]});
      })
      .catch(err => {
        dispatch({type: PROFILE.ERROR, payload: err});
      });
  };
};

export const updateProfile = payload => {
  return dispatch => {
    //     dispatch({type: UPDATE_PROFILE, payload});
  };
};
