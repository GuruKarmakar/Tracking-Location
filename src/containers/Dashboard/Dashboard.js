import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {ServiceButton} from '../../components/Buttons/ServiceButton';
import {Title} from '../../components/Title/Title';
import {AuthContext} from '../../navigation/AuthProvider';
import Apis from '../../services/apis';
import {getProfileData} from '../../store/actions/profile.actions';
import {getVehicleList} from '../../store/actions/vehicle.actions';
import {COLORS, FONT_FAMILY, FONT_SIZE, SCREEN} from '../../utils/constants';
import Spinner from 'react-native-loading-spinner-overlay';
import {DashboardButton} from '../../components/Buttons/DashboardButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const size = 200;

export const Dashboard = () => {
  const {logout} = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    dispatch(getVehicleList());
  };

  const vehicleList = useSelector(state => state.vehicleList.vehicleList);
  const totalCount = vehicleList?.length;

  const running = vehicleList?.filter(i => i.s1 == 'm');
  const stop = vehicleList?.filter(i => i.s1 == 's');
  const idle = vehicleList?.filter(i => i.s1 == 'i');
  const offline = vehicleList?.filter(i => i.s1 == 'off');
  // const stop = vehicleList?.vehicleList?.length;

  // console.log('running', vehicleList - 1);

  return (
    <View style={styles.container}>
      <Spinner visible={vehicleList?.loading} textContent={'Loading...'} />
      {/* <Title text="Dashboard" /> */}

      <ScrollView style={{marginTop: 30}}>
        <View style={styles.view}>
          <View style={styles.center}>
            <Text style={styles.count}>{totalCount}</Text>
            <Text style={[styles.textTotal]}>Total</Text>
          </View>
        </View>
        <View style={styles.flex}>
          <DashboardButton
            isLive
            count={running?.length}
            name="Moving"
            color={COLORS.MOVING}
            onPress={() => {
              if (running.length > 0) {
                navigation.navigate('VehicalList', {data: running});
              }
            }}
          />
          <DashboardButton
            count={stop?.length}
            name="Stopped"
            color={COLORS.STOP}
            onPress={() => {
              if (stop.length > 0) {
                navigation.navigate('VehicalList', {data: stop});
              }
            }}
          />
          <DashboardButton
            count={idle?.length}
            name="Idle"
            color={COLORS.IDLE}
            onPress={() => {
              if (stop.length > 0) {
                navigation.navigate('VehicalList', {data: idle});
              }
            }}
          />
          <DashboardButton
            count={offline?.length}
            name="No Networks"
            color={COLORS.OFFLINE}
            onPress={() => {
              if (stop.length > 0) {
                navigation.navigate('VehicalList', {data: offline});
              }
            }}
          />
          {/* <DashboardButton
            count={0}
            name="No Data"
            color={COLORS.GRAY}
            onPress={() => {}}
          /> */}
        </View>
      </ScrollView>
      <Image
        resizeMode="contain"
        source={require('../../assets/imgs/bg.png')}
        style={{
          width: '100%',
          position: 'absolute',
          zIndex: -999,
          bottom: '-16%',
          opacity: 0.4,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    height: size,
    width: size,
    borderRadius: size / 2,
    borderWidth: 6,
    borderColor: COLORS.PRIMARY,
    elevation: 12,
    backgroundColor: COLORS.WHITE,
    alignSelf: 'center',
  },
  flex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    elevation: 5,
    marginVertical: 20,
    justifyContent: 'space-around',
  },
  text: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.REGULAR,
    textTransform: 'uppercase',
  },
  textTotal: {
    color: COLORS.BLACK,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.REGULAR,
    textTransform: 'uppercase',
    fontSize: FONT_SIZE.BIG,
  },
  count: {
    color: COLORS.BLACK,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.BIG + 8,
  },
});
