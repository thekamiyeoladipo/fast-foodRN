import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text className='text-red-500 text-5xl flex justify-center items-center'>SignIn</Text>
      <Button title='Sign In' onPress={() => router.push("/sign-up")} />
    </View>
  )
}

export default SignIn