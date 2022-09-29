import { FlatList } from "react-native";

/* STYLES */
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";

/* COMPONENTS */
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";

export function Players() {

  const [teams,] = useState(['TEAM A', 'TEAM B'])

  const [teamSelected, setTeamSelected] = useState('TEAM A')

  const [players, setPlayers] = useState(['Lucas', 'Mateus', 'Tiago'])

  function handleClickTeam(newTeam: string) {
    setTeamSelected(newTeam)
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Nome da turma" subtitle="Adicione a galera e separe os times" />

      <Form>
        <Input 
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList 
          data={teams}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item} 
              isActive={item === teamSelected} 
              onPress={() => handleClickTeam(item)}
            />
          )}
          horizontal
        />

        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item} 
            onRemove={() => {}} 
          />
        )}
      />
      
    </Container>
  )
}