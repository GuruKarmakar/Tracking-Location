import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Octicons';
import {Title} from '../../../components/Title/Title';
import {
  COLORS,
  defaultImg,
  FONT_FAMILY,
  FONT_SIZE,
} from '../../../utils/constants';

const Item = ({name, onPress, text}) => {
  return (
    <View style={styles.box2}>
      <View style={[styles.row, {justifyContent: 'space-between'}]}>
        <Text style={styles.text1}>{name}</Text>
        <TouchableOpacity onPress={onPress}>
          <Icon size={18} color="#10258B" name="pencil" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text3}>{text}</Text>
      </View>
    </View>
  );
};

export const MyAccount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Title text="My Account" />
        <View style={styles.row}>
          <Image source={{uri: defaultImg}} style={styles.imageSize} />
          <Text style={styles.text}>Pankaj Chavel</Text>
        </View>
      </View>
      <View>
        {/* <Item name="Name" text="Pankaj Chavel" onPress={() => {}} /> */}
        <Item name="Email" text="test@gmail.com" onPress={() => {}} />
      </View>
    </View>
  );
};

const IMG_SIZE = 40;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  box1: {
    paddingHorizontal: 18,
    backgroundColor: 'white',
  },
  box2: {
    paddingHorizontal: 18,
    backgroundColor: 'white',
    marginVertical: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 16,
  },
  imageSize: {
    height: IMG_SIZE,
    width: IMG_SIZE,
    borderRadius: IMG_SIZE / 2,
    marginRight: 16,
  },
  text: {
    fontSize: FONT_SIZE.BIG + 4,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.TEXT_BLUE,
  },
  text1: {
    fontSize: FONT_SIZE.SMALL,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.TEXT_BLUE,
  },
  text3: {
    fontSize: FONT_SIZE.SMALL,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.BLACK,
    marginBottom: 8,
  },
});
