import { NativeBaseProvider, StatusBar } from 'native-base'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { SignIn } from './src/screens/SignIn'
import { THEME } from './src/styles/theme'
import { Loading } from './src/screens/Loading'
import { Home } from './src/screens/Home'
import { Register } from './src/screens/Register'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

      {fontsLoaded ? <Register /> : <Loading />}
    </NativeBaseProvider>
  )
}
