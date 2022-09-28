import { ThemeProvider } from "styled-components"

import { StatusBar } from "react-native"

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto"

import theme from "@theme/index"

import { Loading } from "@components/Loading"

/* SCREENS */
import { NewGroup } from "@screens/NewGroup"
import { Groups } from "@screens/Groups"
import { Players } from "@screens/Players"

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <ThemeProvider theme={theme}>

      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      { !fontsLoaded ? <Loading /> : <Players /> }
    </ThemeProvider>
  )
}