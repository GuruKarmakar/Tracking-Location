import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../utils/constants'
import { SubmitButton } from '../Buttons/SubmitButton'


const uri = "https://trusteyman.com/wp-content/uploads/2019/02/how-does-plumbing-work-e1548696261445.jpeg"

export const BoxItem = ({ name, isEdit, padding }) => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Image style={styles.img} source={{ uri }} />
				<Text style={styles.text}>{name}</Text>
			</View>
			<View>
				{isEdit
					&&
					<SubmitButton name="Remove" color={COLORS.RED} onPress={() => { }} />
				}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		// backgroundColor: 'red',
		marginVertical: 6
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	img: {
		height: 50,
		width: 50,
		borderRadius: 6
	},
	text: {
		fontFamily: FONT_FAMILY.REGULAR,
		fontSize: FONT_SIZE.MEDIUM,
		color: 'gray',
		marginLeft: 12
	}
})