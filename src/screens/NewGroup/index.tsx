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

export function NewGroup() {

  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  function handleCreateGroup() {
    navigation.navigate('players', { group })
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