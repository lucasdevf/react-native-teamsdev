import { UsersThree } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 90px;

  background-color: ${props => props.theme.COLORS.GRAY_500};
  border-radius: 4px;

  flex-direction: row;
  align-items: center;

  margin-bottom: 12px;
`

export const Title = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE.MD}px;
  color: ${props => props.theme.COLORS.GRAY_200};
  font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
  margin-left: 12px;
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700
}))`
  margin-left: 20px;
`
