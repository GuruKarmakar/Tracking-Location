import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FONT_FAMILY, FONT_SIZE, SCREEN} from '../../utils/constants';

export const Content = ({title, value, color}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.valueStyle, {color}]}>{value}</Text>
        <Text style={[styles.title]}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN.WIDTH * 0.6,
  },
  valueStyle: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    // fontStyle: 'italic',
    textAlign: 'center',
  },
  title: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MICRO,
    textAlign: 'center',
  },
});
