import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../utils/constants'

export const AboutUs = () => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>About us</Text>
			<Text style={styles.text}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum in urna, adipiscing non. Egestas ultrices ut neque nibh sed. Ut aliquam aenean posuere posuere. Eu, sed massa lectus cras lorem massa massa enim egestas. Nisi, justo, facilisis semper nibh. Elementum enim, faucibus molestie malesuada sed dolor, faucibus. Pellentesque elit sed velit consectetur. Diam metus diam nam vitae ut tempor eu id. Sed egestas urna urna nunc, orci. Vitae in nam malesuada eget auctor tincidunt sodales. Velit id nullam tortor vulputate diam luctus. Et, amet neque, in pharetra congue. Varius et pharetra ac volutpat aenean eu dui. Odio sit et accumsan massa suscipit tincidunt pharetra urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum in urna, adipiscing non. Egestas ultri malesuada sed dolor, faucibus. Pellentesque elit sed velit consectetur. Diam metus diam nam vitae ut tempor eu id. Sed egestas urna urna nunc, orci. Vitae in nam malesuada eget auctor tincidunt sodales. Velit id nullam tortor vulputate diam luctus. Et, amet neque, in pharetra congue. Varius et pharetra ac volutpat aenean eu dui. Odio sit et accumsan massa suscipit tincidunt pharetra urna.
			</Text>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: 12
	},
	title: {
		fontFamily: FONT_FAMILY.BOLD,
		fontSize: FONT_SIZE.LARGE,
		color: COLORS.BLACK,
		marginVertical: 12
	},
	text: {
		fontFamily: FONT_FAMILY.REGULAR,
		fontSize: FONT_SIZE.SMALL,
		color: COLORS.GRAY,
		marginVertical: 12
	},
})