import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export const BackButton = () => {
	const { goBack } = useNavigation()
	return (
		<TouchableOpacity onPress={goBack}>
			<Icon name="arrow-back-circle-outline" size={28} color="white" />
		</TouchableOpacity>
	)
}