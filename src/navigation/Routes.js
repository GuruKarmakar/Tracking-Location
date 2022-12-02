import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthProvider';
import { AuthStack } from './stack/Authstack';
import { MainDrawer } from './drawer';

export const Routes = () => {
  const {login, user} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@auth')
      .then(auth => {
        if (auth) {
          login(JSON.parse(auth));
        }
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  // if (!user && loading) {
  //   return <Loader isLoading={loading} />;
  // }

  return (
    <NavigationContainer>
      {user ? <MainDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
};
