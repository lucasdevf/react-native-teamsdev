import { UsersThree } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 90px;

  background-color: ${props => props.theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  margin-bottom: 12px;
`

export const Title = styled.Text`

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    margin-left: 12px;
  `}

`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: 'fill'
}))`
  margin-left: 20px;
`
