
import { useState, useCallback } from "react";
import { FlatList } from "react-native";

/* NAVIGATION */
import { useNavigation, useFocusEffect } from '@react-navigation/native'

/* COMPONENTS */
import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";

/* STYLES */
import { Container } from "./styles";

/* STORAGES */
import { getAllGroups } from "@storage/group/getAllGroups";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Groups() {

  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('newGroup')
  }

  async function fetchGroups() {
    try {
      const groups = await getAllGroups()

      setGroups(groups)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a sua primeira turma?" />
        )}
      />

      <Button 
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </Container>
  )
}