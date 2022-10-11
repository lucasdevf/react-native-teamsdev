import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION } from '@storage/storageConfig'

import { getAllGroups } from './getAllGroups'

export async function createGroup(name: string) {

  try {
    const storedGroups = await getAllGroups()

    const storage = JSON.stringify([...storedGroups, name])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }

}