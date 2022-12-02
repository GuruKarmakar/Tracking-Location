import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BackButton} from '../../../components/Buttons/Backbutton';
import {CommonButton} from '../../../components/Buttons/CommonButton';
import {Input} from '../../../components/Inputs/Input';
import {COLORS, FONT_FAMILY, FONT_SIZE, SCREEN} from '../../../utils/constants';
import {forgetEmailSchema} from '../validate';
import Apis from '../../../services/apis';
import {showMessage} from 'react-native-flash-message';

export const ForgetPassword = () => {
  const {navigate, goBack} = useNavigation();
  const onSubmitHandler = async values => {
    // Apis.ForgetPassword({ email: values.email }).then(res => {
    // 	console.log("res", res);
    // 	const { message, status } = res
    // 	if (status == 200) {
    // 		showMessage({ message, type: 'success' })
    // 		setTimeout(() => {
    // 			goBack()
    // 		}, 2000)
    // 	} else {
    // 		showMessage({ message, type: 'warning' })
    // 	}
    // }).catch(err => {
    // 	showMessage({ message: 'Something went wrong!', type: 'error' })
    // })
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.backButton}>
          <BackButton />
        </View>
        <Text style={styles.title}>Foget Password</Text>
      </View>
      <View style={styles.box2}>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={forgetEmailSchema}
          onSubmit={onSubmitHandler}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            handleSubmit,
          }) => (
            <>
              <Input
                value={values.email}
                onChange={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                touched={touched.email}
                error={errors.email}
                borderColor="#D0EEFF"
                icon="email"
                placeholder="Enter Your Email"
              />
              <View style={styles.forgetPassBox}>
                {/* <TouchableOpacity onPress={() => { }}>
									<Text style={styles.signUpText}>Resend</Text>
								</TouchableOpacity> */}
              </View>
              <View style={styles.buttonBox}>
                <CommonButton
                  onPress={handleSubmit}
                  width={'80%'}
                  text="Submit"
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  box: {
    backgroundColor: COLORS.PRIMARY,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
    height: SCREEN.HEIGHT * 0.3,
    justifyContent: 'center',
  },
  box2: {
    marginHorizontal: 16,
    marginTop: SCREEN.HEIGHT * 0.05,
  },
  forgetPassBox: {
    alignSelf: 'flex-end',
    marginVertical: 8,
  },
  buttonBox: {justifyContent: 'center', alignItems: 'center', marginBottom: 30},
  title: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.BIG,
    color: COLORS.WHITE,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  line: {
    width: SCREEN.WIDTH * 0.35,
    height: 1,
    backgroundColor: '#E2E2E2',
  },
  signUp: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.GRAY,
    alignSelf: 'center',
  },
  signUpText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.TEXT_PURPLE,
    alignSelf: 'center',
  },
  backButton: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    padding: 20,
  },
});
