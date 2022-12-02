import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../utils/constants';
import * as Animatable from 'react-native-animatable';

export const SplashScreen = () => {
	const navigation = useNavigation();
	useEffect(() => {
		const timer = setTimeout(() => {
			navigation.replace('Login');
		}, 2500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<>
			<StatusBar translucent backgroundColor="transparent" />
			<ImageBackground resizeMode="center" source={require('../../assets/imgs/splash.jpeg')} style={styles.container}>
				<View style={styles.box}>
					<Animatable.Text style={styles.title} animation="fadeInDown">Tracking {"\n"} Location</Animatable.Text>
				</View>
			</ImageBackground>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'white'
	},
	box: {
		alignItems: 'center',
		marginTop:90
	},
	title:{
		fontSize:FONT_SIZE.BIG + 10,
		color:COLORS.PRIMARY,
		fontFamily:FONT_FAMILY.MEDIUM,
		textAlign:'center'
	}
});
