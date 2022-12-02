import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { CommonButton } from '../../../components/Buttons/CommonButton'
import { SocialButton } from '../../../components/Buttons/SocialButton'
import { Input } from '../../../components/Inputs/Input'
import { COLORS, FONT_FAMILY, FONT_SIZE, SCREEN } from '../../../utils/constants'
import { RegisterForm } from './RegisterForm'

//constant color
export const Register = () => {
	const { navigate } = useNavigation()
	return (
		<ScrollView style={styles.continer}>
			<View style={styles.box}>
				<Text style={styles.title}>Register New User</Text>
			</View>
			<View>
				<RegisterForm />
			</View>
			<View>
				{/* <View style={styles.row}>
					<View style={styles.line} />
					<Text>Or</Text>
					<View style={styles.line} />
				</View>
				<View style={[styles.row, { marginTop: 16 }]}>
					<SocialButton width={"45%"} text="Google" />
					<SocialButton width={"45%"} type="fb" text="Facebook" />
				</View> */}

				<View style={[styles.row, { justifyContent: 'center', marginBottom: 8 }]}>
					<Text style={styles.login}>Already have an account? </Text>
					<TouchableOpacity onPress={() => navigate('Login')}>
						<Text style={styles.loginUpText}>Login</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.termsBox}>
					<Text style={styles.text}>By singing up you accept the <Text style={{ color: COLORS.TEXT_BLUE }}>Team</Text> of <Text style={{ color: COLORS.TEXT_BLUE }}>Service</Text> Service and <Text style={{ color: COLORS.TEXT_BLUE }}>Privacy Policy</Text></Text>
				</View>
			</View>

		</ScrollView>
	)
}

const styles = StyleSheet.create({
	continer: {
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: COLORS.WHITE
	},
	box: {
		marginVertical: 25
	},
	title: {
		fontFamily: FONT_FAMILY.BOLD,
		fontSize: FONT_SIZE.BIG,
		color: COLORS.BLACK,
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

	text: {
		fontFamily: FONT_FAMILY.LIGHT,
		fontSize: FONT_SIZE.MICRO,
		color: COLORS.BLACK,
		textAlign: 'center',
		marginTop: SCREEN.HEIGHT * 0.15,
	},
	termsBox: {
		marginHorizontal: 14
	},
	loginUpText: {
		fontFamily: FONT_FAMILY.REGULAR,
		fontSize: FONT_SIZE.SMALL,
		color: COLORS.TEXT_PURPLE,
		alignSelf: 'center',
	},
	login: {
		fontFamily: FONT_FAMILY.REGULAR,
		fontSize: FONT_SIZE.SMALL,
		color: COLORS.GRAY,
		alignSelf: 'center'
	},
})