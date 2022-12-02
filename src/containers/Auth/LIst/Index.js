import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {FlatList, Image, StyleSheet, View, Text} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Apis from '../../../services/apis';
import {COLORS, FONT_FAMILY, FONT_SIZE, SCREEN} from '../../../utils/constants';
import {Item} from './Item';

export const VehicalList = () => {
  const params = useRoute()?.params;
  const navigation = useNavigation();
  // const [loading, setLoading] = useState(true);
  const [locationTxt, setLocationTxt] = useState('');

  useEffect(() => {}, []);

  return (
    <>
      {/* <Spinner visible={loading} textContent={'Loading...'} /> */}
      <FlatList
        data={params?.data}
        renderItem={({item, index}) => (
          <Item item={item} index={index} navigation={navigation} />
        )}
        keyExtractor={(_, idx) => idx}
      />
    </>
  );
};
