/* STYLES */
import { Container, Logo, BackButton, BackIcon } from "./styles";

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native'

/* ASSETS */
import logoImg from '@assets/logo.png'

interface Props {
  showBackButton?: boolean
}

export function Header({ showBackButton = false}: Props) {

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {
        showBackButton &&
        <BackButton
          onPress={handleGoBack}
        >
          <BackIcon />
        </BackButton>
      }
      <Logo 
        source={logoImg}
      />
    </Container>
  )
}