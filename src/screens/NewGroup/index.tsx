import { useState } from 'react'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native'

/* COMPONENTS */
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'

/* STYLES */
import { Container, Content, Icon } from './styles'

/* STORAGE FUNCTIONS */
import { createGroup } from '@storage/group/createGroup'

/* ERRORS */
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'

export function NewGroup() {

  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  async function handleCreateGroup() {
    try {

      if(group.trim().length === 0) {
        return Alert.alert('Nova turma', 'Informe o nome da turma')
      }

      await createGroup(group)

      navigation.navigate('players', { group })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova turma', error.message)
      } else {
        Alert.alert('Nova turma', 'Não foi possível criar um novo grupo.')
        console.log(error)
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight title="Nova turma" subtitle="Crie a turma para adicionar as pessoas" />

        <Input 
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />

        <Button 
          title="Criar turma"
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </Content>
    </Container>
  )
}