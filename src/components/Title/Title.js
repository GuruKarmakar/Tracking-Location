import React from 'react'
import { Text } from 'react-native'
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../utils/constants'

export const Title = ({ text }) => {
	return (
		<Text style={{
			marginVertical: 12,
			fontFamily: FONT_FAMILY.BOLD,
			fontSize: FONT_SIZE.MEDIUM,
			color: COLORS.BLACK
		}}>{text}</Text>
	)
}