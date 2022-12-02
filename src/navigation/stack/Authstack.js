import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SplashScreen } from '../../containers/Splash/Splashscreen'
import { Login } from '../../containers/Auth/Login/Login'
import { Register } from '../../containers/Auth/Registration/Register'
import { ForgetPassword } from '../../containers/Auth/ForgetPassword/ForgetPassword'

const Stack = createStackNavigator()
export const AuthStack = () => {
	return (
		<Stack.Navigator initialRouteName="Splash">
			<Stack.Screen
				options={{ headerShown: false }}
				name="Splash"
				component={SplashScreen}
			/>

			<Stack.Screen
				options={{ headerShown: false }}
				name="Login"
				component={Login}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name="Register"
				component={Register}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name="ForgetPassword"
				component={ForgetPassword}
			/>
			{/* 

			<Stack.Screen
				options={{ headerShown: false }}
				name="Loginemail"
				component={Loginemail}
			/>
			<Stack.Screen options={{ headerShown: false }} name="OTP" component={OTP} />
			<Stack.Screen
				options={{ headerShown: false }}
				name="DocumentUpload"
				component={Doc}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name="Interest"
				component={ChooseInterest}
			/> */}
		</Stack.Navigator>

	)
}