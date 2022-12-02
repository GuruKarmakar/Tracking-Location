import {Network} from './Network';
import axios from 'axios';

export default class Apis {
  static Login = data => {
    return Network('GET', '&cmd=USER_GET_OBJECTS', '', data);
  };
  static VehicleObject = data => {
    return Network('GET', '&cmd=USER_GET_OBJECTS', '', data);
  };
  static VehicleObjectWithCoords = data => {
    return Network('GET', `&cmd=OBJECT_GET_LOCATIONS,${data.imei}`, '', data);
  };

  static VehiclelLocation = data => {
    return Network('GET', `&cmd=GET_ADDRESS,${data.lat},${data.lng}`, '', data);
  };
}
