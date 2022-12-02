import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Formik} from 'formik';
import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {CommonButton} from '../../../components/Buttons/CommonButton';
import {Input} from '../../../components/Inputs/Input';
import {AuthContext} from '../../../navigation/AuthProvider';
import Apis from '../../../services/apis';
import {COLORS, FONT_FAMILY, FONT_SIZE} from '../../../utils/constants';
import {loginSchema} from '../validate';

export const LoginForm = () => {
  const {login} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const {navigate} = useNavigation();

  const onSubmitHandler = async values => {
    setLoading(true);
    const url = 'https://www.trackinglocation.com/track/logincheck.php';
    const body = {
      user: values.email,
      pass: values.password,
    };

    axios
      .post(url, body)
      .then(res => {
        const responseJson = res?.data;
        if (responseJson == null) {
          setLoading(false);
          showMessage({
            type: 'danger',
            message: 'Something went wrong!',
          });
        } else {
          setLoading(false);
          showMessage({
            type: 'success',
            message: 'Login Succesfull.',
          });
          setTimeout(() => {
            login(responseJson[0]);
          }, 2000);
        }
      })
      .catch(err => {
        setLoading(false);
      });

    // if(res)
    // Apis.Login(body)
    //   .then(res => {
    //     // console.log("cc", res);
    //     // const { status, message } = res
    //     // if (status == 200) {
    //     // 	login(res)
    //     // } else {
    //     // 	showMessage({
    //     // 		type: 'warning',
    //     // 		message: message
    //     // 	})
    //     // }
    //   })
    //   .catch(err => {
    //     showMessage({
    //       type: 'danger',
    //       message: 'Something went wrong!',
    //     });
    //   });
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
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
          <Spinner visible={loading} textContent={'Loading...'} />
          <Input
            value={values.email}
            onChange={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            icon="account"
            borderColor="#D0EEFF"
            error={errors.email}
            touched={touched.email}
            maxLength={30}
            placeholder="Username"
          />
          <Input
            value={values.password}
            onChange={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            icon="lock"
            borderColor="#D0EEFF"
            error={errors.password}
            touched={touched.password}
            maxLength={18}
            isSecure
            placeholder="Password"
          />
          <View style={styles.forgetPassBox}>
            <TouchableOpacity onPress={() => navigate('ForgetPassword')}>
              <Text style={styles.signUpText}>Forget Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonBox}>
            <CommonButton onPress={handleSubmit} width={'80%'} text="LOG IN" />
          </View>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  forgetPassBox: {
    alignSelf: 'flex-end',
    marginVertical: 8,
  },
  buttonBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 12,
  },
  signUpText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.TEXT_PURPLE,
    alignSelf: 'center',
    // marginTop: 8
  },
});
