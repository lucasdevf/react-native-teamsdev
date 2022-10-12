import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION } from '@storage/storageConfig'

import { getAllGroups } from './getAllGroups'

import { AppError } from '@utils/AppError'

export async function createGroup(name: string) {

  try {
    const storedGroups = await getAllGroups()

    const groupAlreadyExists = storedGroups.includes(name)

    if(groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.')
    }

    const storage = JSON.stringify([...storedGroups, name])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }

}