import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../utils/constants'

export const ServiceButton = ({ text, onPress, color }) => {
	return (
		<TouchableOpacity style={[styles.btn, { backgroundColor: color }]} onPress={onPress}>
			<View style={styles.row}>
				<Text style={styles.text}>{text}</Text>
				<Icon name='right' size={22} color={COLORS.WHITE} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	btn: {
		backgroundColor: COLORS.SECENDARY,
		marginVertical: 8,
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5
	},
	text: {
		fontFamily: FONT_FAMILY.MEDIUM,
		fontSize: FONT_SIZE.MEDIUM,
		color: COLORS.WHITE,
		padding: 16,

	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginRight: 12
	}
})