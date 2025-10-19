import { Slot, Redirect } from 'expo-router'

const _layout = () => {
  const isAuthenticated = false // Replace with your authentication logic

  if (!isAuthenticated) return <Redirect href="/sign-in" />
  return <Slot />
}

export default _layout