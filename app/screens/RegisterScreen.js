import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import { AppForm, AppFormField, SubmitButton } from '../components/forms'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('必須項目です')
    .min(1, '1文字以上入力してください')
    .label('Name'),
  email: Yup.string()
    .required('必須項目です')
    .email('メール形式で入力してください')
    .label('Email'),
  password: Yup.string()
    .required('必須項目です')
    .min(4, '4文字以上入力してください')
    .label('Password'),
})

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})

export default RegisterScreen
