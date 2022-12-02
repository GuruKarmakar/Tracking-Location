import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().required('Email is required.').trim(),
  password: yup.string().required('Password is required.'),
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const resgistrationSchema = yup.object().shape({
  fullName: yup.string().required('Fullname is required.').trim(),
  phone: yup
    .string()
    .required('Mobile number is required')
    .matches(phoneRegExp, 'Mobile number is not valid')
    .min(10, 'Mobile number is to short')
    .max(14, 'Mobile number is to long'),
  email: yup
    .string()
    .email('Email must be vaild.')
    .required('Email is required.')
    .trim(),
  address: yup.string().required('Please enter your address').trim(),
  email: yup
    .string()
    .email('Email must be vaild.')
    .required('Email is required.')
    .trim(),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const addLocationSchema = yup.object().shape({
  address1: yup.string().required('Address is required.'),
  // address2: yup.string().required('Email is required.'),
  pincode: yup.string().required('Pincode is required.'),
  landmark: yup.string().required('Landmark is required.'),
  state: yup.string().required('State is required.'),
});

export const forgetEmailSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be vaild.')
    .required('Email is required.'),
});

export const mobileSchema = yup.object().shape({
  mobile: yup
    .string()
    .required('Mobile number is required')
    .matches(phoneRegExp, 'Mobile number is not valid')
    .min(10, 'Mobile number is to short')
    .max(14, 'Mobile number is to long'),
});

export const resetPasswordSchema = yup.object().shape({
  OTP: yup.string().required('OTP is required.'),
  newPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required.'),
  newConfirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
});

export const optSchema = yup.object().shape({
  otp: yup
    .string()
    .required('OTP is required.')
    .min(4, 'Please enter 4 digit of OTP'),
});

export const socialLoginValidateSchema = yup.object().shape({
  phone_no: yup
    .string()
    .required('Mobile number is required')
    .matches(phoneRegExp, 'Mobile number is not valid')
    .min(10, 'Mobile number is to short')
    .max(14, 'Mobile number is to long'),
});
