import React from 'react'
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../utils/constants'
import FB from '../../assets/imgs/facebook.png'
import GOOGLE from '../../assets/imgs/google.png'

export const SocialButton = ({ text, width, type, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.container, { width }]}>
			<Image style={styles.img} source={type == "fb" ? FB : GOOGLE} />
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.WHITE,
		borderRadius: 8,
		// flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 12,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
		marginBottom: 4
	},
	text: {
		fontFamily: FONT_FAMILY.REGULAR,
		fontSize: FONT_SIZE.MEDIUM,
		color: COLORS.TEXT_PURPLE,
		padding: 6,
		textAlign: 'center',
		marginLeft: 8,
		marginTop: 4
	},
	img: {
		height: 20,
		width: 20
	}
})