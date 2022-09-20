import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Text } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'SUCCESS', ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Text>{title}</Text>
    </Container>
  )
}