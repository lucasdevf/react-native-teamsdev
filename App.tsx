import { StatusBar } from "react-native"

/* FONTS */
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto"

/* STYLES */
import theme from "@theme/index"
import { ThemeProvider } from "styled-components/native"

/* COMPONENTS */
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

      { !fontsLoaded ? <Loading /> : <Groups /> }
    </ThemeProvider>
  )
}