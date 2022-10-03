import { NavigationContainer } from '@react-navigation/native'

/* ROUTES */
import { AppRoutes } from './app.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}