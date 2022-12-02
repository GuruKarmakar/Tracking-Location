import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS, FONT_FAMILY, FONT_SIZE, SCREEN } from '../../../utils/constants'
import { LoginForm } from './LoginForm'

export const Login = () => {
	const { navigate } = useNavigation()

	return (
		<View style=
			{styles.container}>
			<View style={styles.box}>
				<Text style={styles.title}>Wellcome, Back</Text>
			</View>
			<View style={styles.box2}>
				<LoginForm />
				<View>
					<View style={[styles.row, { justifyContent: 'center', marginBottom: 8 }]}>
						<Text style={styles.signUp}>Don't have an account? </Text>
						<TouchableOpacity onPress={() => navigate('Register')}>
							<Text style={styles.signUpText}>Sign up</Text>
						</TouchableOpacity>
					</View>
					{/* <View style={styles.row}>
						<View style={styles.line} />
						<Text>Or</Text>
						<View style={styles.line} />
					</View> */}
					{/* <View style={[styles.row, { marginTop: 12 }]}>
						<SocialButton width={"45%"} text="Google" />
						<SocialButton width={"45%"} type="fb" text="Facebook" />
					</View> */}
					<View style={styles.termsBox}>
						<Text style={styles.text}>By singing up you accept the <Text style={{ color: COLORS.TEXT_BLUE }}>Team</Text> of <Text style={{ color: COLORS.TEXT_BLUE }}>Service</Text> Service and <Text style={{ color: COLORS.TEXT_BLUE }}>Privacy Policy</Text></Text>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.WHITE
	},
	box: {
		backgroundColor: COLORS.PRIMARY,
		borderBottomEndRadius: 24,
		borderBottomStartRadius: 24,
		height: SCREEN.HEIGHT * 0.3,
		justifyContent: 'center'
	},
	box2: {
		marginHorizontal: 16,
		marginTop: SCREEN.HEIGHT * 0.05
	},

	title: {
		fontFamily: FONT_FAMILY.MEDIUM,
		fontSize: FONT_SIZE.BIG,
		color: COLORS.WHITE,
		alignSelf: 'center'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	line: {
		width: SCREEN.WIDTH * 0.35,
		height: 1,
		backgroundColor: '#E2E2E2'
	},
	signUp: {
		fontFamily: FONT_FAMILY.REGULAR,
		fontSize: FONT_SIZE.SMALL,
		color: COLORS.GRAY,
		alignSelf: 'center'
	},
	signUpText: {
		fontFamily: FONT_FAMILY.REGULAR,
		fontSize: FONT_SIZE.SMALL,
		color: COLORS.TEXT_PURPLE,
		alignSelf: 'center',
	},

	text: {
		fontFamily: FONT_FAMILY.LIGHT,
		fontSize: FONT_SIZE.MICRO,
		color: COLORS.BLACK,
		textAlign: 'center',
		marginTop: SCREEN.HEIGHT * 0.15,
	},
	termsBox: {
		marginHorizontal: 14
	}
})