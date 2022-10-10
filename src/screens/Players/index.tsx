
import React, { useState } from "react";
import { FlatList } from "react-native";

/* NAVIGATION */
import { useRoute } from "@react-navigation/native";

/* STYLES */
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

/* COMPONENTS */
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";
import { Button } from "@components/Button";

interface RouteParams {
  group: string
}

export function Players() {

  const [teams,] = useState(['TEAM A', 'TEAM B'])

  const [teamSelected, setTeamSelected] = useState('TEAM A')

  const [players, setPlayers] = useState([])

  const route = useRoute()

  const { group } = route.params as RouteParams

  function handleClickTeam(newTeam: string) {
    setTeamSelected(newTeam)
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

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

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
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
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
      />

      <Button 
        title="Remover turma"
        type="DANGER"
      />
      
    </Container>
  )
}