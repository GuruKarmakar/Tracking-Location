import React from 'react';
import { Text } from 'react-native';
import { FONT_FAMILY, FONT_SIZE } from '../../utils/constants';

export const TextInputError = ({ error, touched }) => {
	return (
		<>
			{touched && error && (
				<Text style={{
					fontFamily: FONT_FAMILY.REGULAR,
					color: '#ff3333',
					fontSize: FONT_SIZE.MICRO
				}}>
					{error}
				</Text>
			)}
		</>
	);
};
