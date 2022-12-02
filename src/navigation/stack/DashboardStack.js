import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard} from '../../containers/Dashboard/Dashboard';
import {TermsAndCondition} from '../../containers/TermsAndCondition';
import {PrivacyPolicy} from '../../containers/Privacyandpolicies';
import {MyAccount} from '../../containers/Dashboard/MyAccout/MyAccount';
import {VehicalList} from '../../containers/Auth/LIst/Index';
import {LiveTracking} from '../../containers/Map/Map';

const Stack = createStackNavigator();
export const DashboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        // options={{headerShown: false}}
        name="LiveTracking"
        component={LiveTracking}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="VehicalList"
        component={VehicalList}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="MyAccount"
        component={MyAccount}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="TermsAndCondition"
        component={TermsAndCondition}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="PrivicyPolicy"
        component={PrivacyPolicy}
      />
    </Stack.Navigator>
  );
};
