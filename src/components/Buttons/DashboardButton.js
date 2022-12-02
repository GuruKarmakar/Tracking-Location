import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {COLORS, FONT_FAMILY, FONT_SIZE, SCREEN} from '../../utils/constants';
import * as Animatable from 'react-native-animatable';

// navigation.navigate('VehicalList');
export const DashboardButton = ({name, count, color, onPress, isLive}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        padding: 18,
        width: SCREEN.WIDTH * 0.4,
        margin: 6,
        borderRadius: 4,
        elevation: 5,
      }}>
      <Text
        style={{
          color: COLORS.WHITE,
          textAlign: 'center',
          fontFamily: FONT_FAMILY.REGULAR,
          textTransform: 'uppercase',
        }}>
        {count}
        {'\n'}
        {name}
      </Text>
      {/* {isLive && (
        <Animatable.Image
          animation="slideInLeft"
          easing="ease-out"
          iterationCount="infinite"
          source={require('../../assets/imgs/car2.png')}
          style={{
            height: 30,
            width: 30,
          }}></Animatable.Image>
      )} */}
    </TouchableOpacity>
  );
};
