import React from 'react';
import {StyleSheet, View, Text, Platform, LogBox} from 'react-native';
import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import haversine from 'haversine';
import BottomSheet from 'react-native-simple-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Apis from '../../services/apis';
import {COLORS, FONT_FAMILY, FONT_SIZE, SCREEN} from '../../utils/constants';
import {DynamicIcon} from '../Auth/LIst/Item';
import {Content} from './Content';
import {ScrollView} from 'react-native-gesture-handler';

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

const iconSize = 25;
class LiveTracking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: this.props.route.params?.item,
      latitude: parseFloat(this.props.route.params?.item?.lat),
      longitude: parseFloat(this.props.route.params?.item?.lng),
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      address: 'Loading....',
      coordinate: new AnimatedRegion({
        latitude: parseFloat(this.props.route.params?.item?.lat),
        longitude: parseFloat(this.props.route.params?.item?.lng),
        latitudeDelta: 0,
        longitudeDelta: 0,
      }),
      data: {},
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerTitle: this.state.params.name,
    });
    LogBox.ignoreLogs([
      'setNativeProps is deprecated and will be removed in next major release',
    ]);
    const {coordinate, params} = this.state;
    this.loadAdd();
    if (params.s1 == 'm') {
      this.timer = setInterval(() => {
        this.startTracking();
        this.loadAdd();
      }, 8000);
    } else {
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTracking = () => {
    const {coordinate, params, routeCoordinates, distanceTravelled} =
      this.state;
    Apis.VehicleObjectWithCoords({imei: params?.imei}).then(res => {
      const key = Object.keys(res);
      const lat = res[key].lat;
      const lng = res[key].lng;

      const newCoordinate = {
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
      };

      if (Platform.OS === 'android') {
        if (this.marker) {
          coordinate.timing(newCoordinate).start();
        }
      } else {
        coordinate.timing(newCoordinate).start();
      }

      this.setState({
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
        routeCoordinates: routeCoordinates.concat([newCoordinate]),
        distanceTravelled: distanceTravelled + this.calcDistance(newCoordinate),
        prevLatLng: newCoordinate,
        data: res,
      });
    });
  };

  loadAdd = () => {
    const {latitude, longitude} = this.state;
    Apis.VehiclelLocation({
      lat: latitude,
      lng: longitude,
    }).then(address => {
      this.setState({address});
    });
  };

  stopPosition = () => {
    // Geolocation.clearWatch(this.watchID);
  };

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  calcDistance = newLatLng => {
    const {prevLatLng} = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

  calculateHeading = (cord1, cord2) => {
    if (cord2) {
      const {latitude: lat1, longitude: lng1} = cord1;
      const {latitude: lat2, longitude: lng2} = cord2;
      const y = Math.sin(lng2 - lng1) * Math.cos(lat2);
      const x =
        Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1);
      const θ = Math.atan2(y, x);
      const brng = ((θ * 180) / Math.PI + 360) % 360;
      return brng;
    }
    return 0;
  };

  render() {
    const {params} = this.state;
    // console.log('xxxx', this.state?.data);

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showUserLocation
          followUserLocation
          loadingEnabled
          region={this.getMapRegion()}>
          <Polyline
            strokeColor="lime"
            coordinates={this.state.routeCoordinates}
            strokeWidth={5}
          />
          <Marker.Animated
            image={require('../../assets/imgs/marker.png')}
            style={{
              height: 60,
              width: 60,
            }}
            flat
            rotation={params?.angle}
            title={this.state.params?.name}
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={this.state.coordinate}
          />
        </MapView>
        <BottomSheet sliderMinHeight={SCREEN.HEIGHT * 0.25} isOpen={false}>
          <View style={{flex: 1}}>
            <View style={[styles.row]}>
              <Icon
                name="map-marker"
                size={25}
                color={COLORS.GRAY}
                style={{alignSelf: 'center'}}
              />
              <Text style={[styles.Txt, {width: '90%'}]}>
                {this.state.address}
              </Text>
            </View>
            <View style={[styles.row, {marginTop: 5}]}>
              <Icon
                name="card-account-details-star-outline"
                size={25}
                color={COLORS.GRAY}
                style={{alignSelf: 'center'}}
              />
              <Text
                style={[styles.Txt, {width: '90%', color: COLORS.SECENDARY}]}>
                Plate no: {params?.plate_number}
              </Text>
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
                isTrue={true}
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
            <ScrollView style={{marginVertical: 16, flex: 1}}>
              <View style={styles.around}>
                <Content title="Odometer" value={777.22} color="navy" />
                <Content
                  title="Speed"
                  value={params?.speed ? `${params?.speed} km/h` : 'N/A'}
                  color="orange"
                />
                <Content title="Fuel" value={0} color="gary" />
              </View>
              <View style={styles.around}>
                <Content
                  title="From Last Stop"
                  value={'00:00'}
                  color="skyblue"
                />
                <Content title="Distance" value={'0 KM'} color="pink" />
                <Content
                  title="Total"
                  value={params?.engine_hours ? params.engine_hours : 'N/A'}
                  color="skyblue"
                />
              </View>
              <View style={styles.around}>
                <Content title="From " value={777.22} color="teal" />
                <Content title="Speed" value={777.22} color="black" />
                <Content title="Fuel" value={777.22} color="teal" />
              </View>
            </ScrollView>
          </View>
        </BottomSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
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
  around: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
});

export default LiveTracking;
