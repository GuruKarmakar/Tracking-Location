import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../utils/constants'

export const CommonButton = ({ text, width, type, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.container, { width }]}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.PRIMARY,
		borderRadius: 8,
	},
	text: {
		fontFamily: FONT_FAMILY.REGULAR,
		fontSize: FONT_SIZE.LARGE,
		color: COLORS.WHITE,
		padding: 8,
		textAlign: 'center'
	}
})