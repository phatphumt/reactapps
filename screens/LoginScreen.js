import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <TextInput
        placeholder="Email"
        style={[styles.textInput]}
        inputMode="email"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.textPasswordInput}
        inputMode='none'
      />
      <TouchableOpacity style={styles.signinButton}>
        <Text style={styles.signinButtonText}>Sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container : {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight(),
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText : { 
    textAlign: 'center',
    margin: 10,
    fontSize: 40,
  },
  signinButton : {
    margin: 10,
    backgroundColor: 'dodgerblue',
    borderRadius: 10
  },
  signinButtonText : {
    margin: 10,
    color: "#fff",
    fontSize: 20
  },
  textInput : {
    margin: 5,
    height: 40,
    width: 200,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: "#c9c9c9",
    borderRadius: 10,
    padding: 10
  },
  textPasswordInput : {
    margin: 5,
    fontSize: 20,
    height: 40,
    width: 200,
    textAlign: 'center',
    backgroundColor: "#c9c9c9",
    borderRadius: 10,
    padding: 10
  }
})