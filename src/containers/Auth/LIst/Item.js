import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONT_FAMILY, FONT_SIZE} from '../../../utils/constants';
import * as Animatable from 'react-native-animatable';
import Blink from './Blink';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const DynamicIcon = ({
  CP = Icon,
  iconName,
  text,
  color,
  isTrue,
  size,
}) => {
  return (
    <View style={{marginTop: 4, marginHorizontal: 4}}>
      <CP
        name={iconName}
        size={size || 14}
        color={isTrue ? 'green' || color : COLORS.GRAY}
        style={{alignSelf: 'center'}}
      />
      <Text style={[styles.iconText, {color: isTrue ? 'green' : COLORS.GRAY}]}>
        {text}
      </Text>
    </View>
  );
};

export const Item = ({item, idx, navigation}) => {
  const s1 = item?.s1;
  const dynamicFn = () => {
    let color;
    let text;
    if (s1 == 'm') {
      color = COLORS.MOVING;
      text = 'Moving';
    } else if (s1 == 's') {
      color = COLORS.STOP;
      text = 'Stopped';
    } else if (s1 == 'i') {
      color = COLORS.IDLE;
      text = 'Idle';
    } else {
      color = COLORS.OFFLINE;
      text = 'Ofline';
    }
    // console.log('x', text);

    return {
      color,
      text,
    };
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('LiveTracking', {item});
      }}
      activeOpacity={0.5}
      key={idx}
      style={styles.item}>
      <View style={styles.row}>
        <View style={[styles.row1]}>
          <View>
            <Icon
              name="car"
              size={45}
              color={'green'}
              style={{alignSelf: 'center', marginTop: '50%'}}
            />
            <Text style={styles.speedText}>{item?.speed}/KM</Text>
          </View>
        </View>
        <View style={{flex: 0.8, padding: 8}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.name}>{item.name}</Text>

            {item?.s1 == 'm' && (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Blink duration={500}>
                  <View style={styles.notification} />
                </Blink>
                <Text
                  style={[
                    styles.running,
                    {
                      fontSize: 8,
                      marginLeft: 2,
                      marginTop: 4,
                      color: 'black',
                    },
                  ]}>
                  {dynamicFn().text}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.row}>
            <Icon
              name="card-account-details-star-outline"
              size={16}
              color={COLORS.GRAY}
              style={{alignSelf: 'center'}}
            />
            <Text style={[styles.dateTxt]}>
              {' '}
              Number Plate: {item?.plate_number ? item?.plate_number : 'N/A'}
            </Text>
          </View>
          <View style={styles.row}>
            <Icon
              name="map-marker"
              size={18}
              color={COLORS.GRAY}
              style={{alignSelf: 'center'}}
            />
            <Text style={[styles.dateTxt, {width: '90%'}]}>
              Status:
              <Text
                style={{
                  color: dynamicFn()?.color,
                }}>
                {' '}
                {item?.s2 ? item?.s2 : 'N/A'}
              </Text>
              {/* Lat: {item.lat}, Lng: {item.lng} */}
              {/* {item.address} */}
            </Text>
          </View>
          <View style={styles.hr} />
          <View style={styles.row}>
            <DynamicIcon
              iconName={'key'}
              cp={Icon}
              text="Ignition"
              isTrue={item.active == 'true'}
            />
            <DynamicIcon
              iconName="air-conditioner"
              cp={Icon}
              text="AC"
              isTrue={false}
            />
            <DynamicIcon iconName="fuel" cp={Icon} text="Fuel" isTrue={false} />
            <DynamicIcon
              iconName={'battery-charging-high'}
              cp={Icon}
              text="Power"
              isTrue={false}
            />
            <DynamicIcon
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
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {},
  item: {
    flex: 1,
    elevation: 4,
    borderRadius: 6,
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 8,
    // padding: 8,
  },
  row: {
    flexDirection: 'row',
  },
  row1: {
    flex: 0.2,
    backgroundColor: '#f1f1f1',
    padding: 8,
    borderLeftWidth: 4,
    borderLeftColor: 'green',
    borderBottomStartRadius: 6,
    borderTopStartRadius: 6,
  },
  name: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: COLORS.BLACK,
  },
  running: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.LARGE,
    color: 'green',
  },
  dateTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 10,
    color: COLORS.GRAY,
    marginLeft: 4,
    marginTop: 2,
  },
  iconText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 9,
    color: COLORS.GRAY,
    marginLeft: 4,
    marginTop: 2,
  },
  hr: {
    height: 0.3,
    backgroundColor: 'gray',
    marginVertical: 4,
  },
  notification: {
    width: 8,
    height: 8,
    borderRadius: 10,
    position: 'absolute',
    top: 6,
    right: 2,
    backgroundColor: 'green',
  },
  speedText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MICRO,
    color: COLORS.GRAY,
    textAlign: 'center',
    marginTop: 6,
    letterSpacing: 1,
    fontStyle: 'italic',
  },
});
