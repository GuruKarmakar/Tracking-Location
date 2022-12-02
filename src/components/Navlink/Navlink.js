import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../utils/constants';
import Icon from 'react-native-vector-icons/MaterialIcons'

export const Navlink = ({ title, onPress, img, showIcon, color }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<View style={[styles.row, { justifyContent: 'space-between', alignItems: 'center' }]}>
				<View style={styles.row}>
					<Image source={img} style={styles.img} />
					<Text style={[styles.text, { color: color ? color : COLORS.BLACK }]}>{title}</Text>
				</View>
				<View>

					{
						showIcon &&
						<Icon name="arrow-forward-ios" size={12} color="gray" />
					}
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 5,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	img: { height: 22, width: 22, marginRight: 12, marginTop: 6 },
	text: {
		fontSize: FONT_SIZE.SMALL,
		fontFamily: FONT_FAMILY.MEDIUM,
		color: COLORS.BLACK,
		paddingVertical: 8,
		marginTop: 4
	},
	img: {
		height: 20,
		width: 20,
		marginRight: 12
	},

});
