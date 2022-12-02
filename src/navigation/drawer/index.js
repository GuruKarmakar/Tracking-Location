import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {DashboardStack} from '../stack/DashboardStack';
import {CustomDrawer} from './CustomDrawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard} from '../../containers/Dashboard/Dashboard';
import {TermsAndCondition} from '../../containers/TermsAndCondition';
import {PrivacyPolicy} from '../../containers/Privacyandpolicies';
import {MyAccount} from '../../containers/Dashboard/MyAccout/MyAccount';
import {VehicalList} from '../../containers/Auth/LIst/Index';
import LiveTracking from '../../containers/Map/Map';

//Drawer
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="back"
      drawerPosition="left"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  );
};

export const MainDrawer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Dashboard"
        component={DrawerComponent}
      />
      <Stack.Screen name="LiveTracking" component={LiveTracking} />
      <Stack.Screen name="VehicalList" component={VehicalList} />
      <Stack.Screen name="MyAccount" component={MyAccount} />
      <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
      <Stack.Screen name="PrivicyPolicy" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
};
