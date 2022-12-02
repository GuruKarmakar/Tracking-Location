import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../utils/constants'

export const SubmitButton = ({ color, name, width, onPress, padding }) => {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.btn, { backgroundColor: color, width }]}>
			<Text style={[styles.text, { padding: padding || 8 }]}>{name}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	btn: {
		backgroundColor: COLORS.PRIMARY,
		borderRadius: 8,
	},
	text: {
		fontFamily: FONT_FAMILY.BOLD,
		fontSize: FONT_SIZE.MEDIUM,
		color: 'white',
		textAlign: 'center',
		padding: 8,
	}
})