import {useNavigation, useRoute} from '@react-navigation/native';
import _ from 'lodash';
import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import MapView, {
  Marker,
  Polygon,
  Polyline,
  PROVIDER_GOOGLE,
} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import BottomSheet from 'react-native-simple-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Apis from '../../services/apis';
import {COLORS, FONT_FAMILY, FONT_SIZE} from '../../utils/constants';
import {DynamicIcon} from '../Auth/LIst/Item';

const iconSize = 25;

export const LiveTracking = () => {
  const navigation = useNavigation();
  const params = useRoute()?.params?.item;
  const lat = parseFloat(params.lat);
  const lng = parseFloat(params.lng);
  const [address, setAddress] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState([]);
  const coords = [];

  const [polygon, setPolygon] = useState([]);

  useEffect(() => {
    // setData(storeCoords(lat, lng, coords));
    let timer;
    if (params?.s1 == 'm') {
      timer = setInterval(() => {
        getLocation();
      }, 8000);
      return () => clearInterval(timer);
    }
  }, []);

  const getLocation = () => {
    Apis.VehicleObjectWithCoords({imei: 866561010542714})
      .then(res => {
        const key = Object.keys(res);
        const lat = res[key].lat;
        const lng = res[key].lng;
        storeCoords(lat, lng, coords);
      })
      .catch(err => {});
  };

  const storeCoords = (lat, lng, arr) => {
    const newArr = arr.concat({latitude: lat, longitude: lng});
    setData(newArr);
    return newArr;
  };

  // useLayoutEffect(() => {
  //   loadAdd();
  //   navigation.setOptions({
  //     headerTitle: params.name,
  //   });
  // }, [navigation]);

  // const loadAdd = () => {
  //   Apis.VehiclelLocation({lat, lng}).then(address => {
  //     setAddress(address);
  //   });
  // };

  // console.log('arr', data);

  return (
    <View style={styles.container}>
      <MapView
        zoomEnabled
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {/* <Marker
          coordinate={{latitude: lat, longitude: lng}}
          title={params.name}
          description={'OK'}
          image={require('../../assets/imgs/car2.png')}
          style={{
            height: 60,
            width: 60,
          }}
        /> */}
        {/* <Polygon
          coordinates={data}
          fillColor="rgba(0, 200, 0, 0.5)"
          strokeColor="rgba(0,0,0,0.5)"
          strokeWidth={2}
        /> */}
        {/* <Polyline coordinates={data} strokeWidth={5} /> */}
      </MapView>
      <BottomSheet onClose={() => setIsOpen(true)} isOpen={isOpen}>
        <View style={{flex: 1}}>
          <View style={[styles.row]}>
            <Icon
              name="map-marker"
              size={25}
              color={COLORS.GRAY}
              style={{alignSelf: 'center'}}
            />
            <Text style={[styles.Txt, {width: '90%'}]}>{address}</Text>
          </View>
          <View
            style={[
              styles.row,
              {justifyContent: 'space-between', marginVertical: 12},
            ]}>
            <DynamicIcon
              size={iconSize}
              iconName={'key'}
              cp={Icon}
              text="Ignition"
              isTrue={params.active == 'true'}
            />
            <DynamicIcon
              size={iconSize}
              iconName="air-conditioner"
              cp={Icon}
              text="AC"
              isTrue={false}
            />
            <DynamicIcon
              size={iconSize}
              iconName="fuel"
              cp={Icon}
              text="Fuel"
              isTrue={false}
            />
            <DynamicIcon
              size={iconSize}
              iconName={'battery-charging-high'}
              cp={Icon}
              text="Power"
              isTrue={false}
            />
            <DynamicIcon
              size={iconSize}
              iconName={'car-door'}
              cp={Icon}
              text="Door"
              isTrue={false}
            />
            {/* <DynamicIcon
              iconName={'battery-high'}
              cp={Icon}
              color="gray"
              text={item.batteryPercentage}
              isTrue={item.batteryPercentage}
            /> */}
          </View>
          <View style={{paddingBottom: 60}} />
        </View>
      </BottomSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  row: {
    flexDirection: 'row',
  },
  Txt: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.GRAY,
    marginLeft: 16,
    marginTop: 2,
  },
});
