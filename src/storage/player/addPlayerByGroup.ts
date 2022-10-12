import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "@storage/storageConfig";

import { PlayerDTO } from "./PlayerDTO";

import { AppError } from "@utils/AppError";
import { getPlayersByGroup } from "./getPlayersByGroup";

export async function addPlayerByGroup(newPlayer: PlayerDTO, group: string) {

  try {

    const storedPlayers = await getPlayersByGroup(group)

    const playerAlreadyExists = storedPlayers.find(player => player.name === newPlayer.name)

    if (playerAlreadyExists) {
      throw new AppError('Este jogador já está adicionada em outro time.')
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)

  } catch (error) {
    throw error
  }

}