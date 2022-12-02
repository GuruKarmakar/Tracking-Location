import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { CommonButton } from '../../../components/Buttons/CommonButton'
import { Input } from '../../../components/Inputs/Input'
import Apis from '../../../services/apis'
import { COLORS } from '../../../utils/constants'
import { resgistrationSchema } from '../validate'

export const RegisterForm = () => {
	const { goBack } = useNavigation()
	const onSubmitHandler = (values) => {
		// console.log("Values", values);
		const body = {
			name: values.fullName,
			email: values.email,
			mob_no: values.phone,
			password: values.password
		}

		// console.log("body", body);

		// Apis.Register(body).then(res => {
		// 	console.log("res", res);
		// 	const { status, message } = res

		// 	if (status === 200) {
		// 		showMessage({
		// 			type: 'success',
		// 			message
		// 		})
		// 		setTimeout(() => {
		// 			goBack()
		// 		}, 1500)
		// 	} else {
		// 		showMessage({
		// 			type: 'warning',
		// 			message
		// 		})

		// 	}

		// }).catch(err => {
		// 	showMessage({
		// 		type: 'info',
		// 		message: 'Something went worng!'
		// 	})
		// })
	}
	return (
		<Formik
			initialValues={{
				fullName: '',
				phone: '',
				email: '',
				address: '',
				password: '',
				confirmPassword: ''
			}}
			validationSchema={resgistrationSchema}
			onSubmit={onSubmitHandler}
		>
			{({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }) => (
				<>
					<Input
						value={values.fullName}
						onChange={handleChange('fullName')}
						onBlur={() => setFieldTouched('fullName')}
						error={errors.fullName}
						touched={touched.fullName}
						backgroundColor={COLORS.INPUT_GRAY}
						borderColor={COLORS.INPUT_GRAY_BORDER}
						icon="account"
						placeholder="Name" />
					<Input
						value={values.phone}
						onChange={handleChange('phone')}
						onBlur={() => setFieldTouched('phone')}
						error={errors.phone}
						touched={touched.phone}
						backgroundColor={COLORS.INPUT_GRAY}
						borderColor={COLORS.INPUT_GRAY_BORDER}
						keyboardType="number-pad"
						icon="phone"
						placeholder="Phone" />
					<Input
						value={values.email}
						onChange={handleChange('email')}
						onBlur={() => setFieldTouched('email')}
						error={errors.email}
						touched={touched.email}
						backgroundColor={COLORS.INPUT_GRAY}
						borderColor={COLORS.INPUT_GRAY_BORDER}
						icon="email"
						placeholder="Email" />
					<Input
						value={values.address}
						onChange={handleChange('address')}
						onBlur={() => setFieldTouched('address')}
						error={errors.address}
						touched={touched.address}
						backgroundColor={COLORS.INPUT_GRAY}
						borderColor={COLORS.INPUT_GRAY_BORDER}
						icon="map-marker"
						placeholder="Address" />
					<Input
						value={values.password}
						onChange={handleChange('password')}
						onBlur={() => setFieldTouched('password')}
						error={errors.password}
						touched={touched.password}
						backgroundColor={COLORS.INPUT_GRAY}
						borderColor={COLORS.INPUT_GRAY_BORDER}
						icon="lock"
						isSecure
						placeholder="Password" />
					<Input
						value={values.confirmPassword}
						onChange={handleChange('confirmPassword')}
						onBlur={() => setFieldTouched('confirmPassword')}
						error={errors.confirmPassword}
						touched={touched.confirmPassword}
						backgroundColor={COLORS.INPUT_GRAY}
						borderColor={COLORS.INPUT_GRAY_BORDER}
						icon="lock"
						placeholder="Confirm Password" />

					<View style={styles.buttonBox}>
						<CommonButton onPress={handleSubmit} width={'80%'} text="Register" />
					</View>
				</>
			)}

		</Formik>
	)
}

const styles = StyleSheet.create({
	buttonBox: { justifyContent: 'center', alignItems: 'center', marginVertical: 30 },
})