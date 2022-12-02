import axios from 'axios';
import {base_url} from '../utils/constants';
import qs from 'qs';
import AsyncStorage from '@react-native-async-storage/async-storage';

//THIS CODE IS FOR DEBUGGIN NETWORK CALLES IN CHROME DEVTOOLS
//REMOVE THIS ON PRODUCTION BUILD
// XMLHttpRequest = GLOBAL.originalXMLHttpRequest
//   ? GLOBAL.originalXMLHttpRequest
//   : GLOBAL.XMLHttpRequest;

//Main method for network calls using axios
export const Network = (method, endpoint, headers, data = {}) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('@auth').then(res => {
      const server_key = JSON.parse(res)?.api_key;
      //cheking network connection
      if (method == 'GET') {
        axios({
          method,
          url: `https://www.trackinglocation.com/track/api/api.php?api=user&ver=1.0&key=${server_key}${endpoint}`,
          headers: {
            Accept: 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            // "token": data.token ? data.token : '',
            // Authorization: `Bearer ${data.token}`,
          },
        })
          // .then((response) => response.json())
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(err);
          });
      } else {
        axios({
          method,
          url: `https://www.trackinglocation.com/track/api/api.php?api=user&ver=1.0&key=${server_key}${endpoint}`,
          data: qs.stringify(data),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'Content-Type': headers || 'application/json',
            // Authorization: `Bearer ${data.token}`,
            // "token": data.token,
            // Authorization: data.token && `Bearer ${data.token}`,
          },
        })
          // .then((response) => response.json())
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(err);
          });
      }
    });
  });
};
