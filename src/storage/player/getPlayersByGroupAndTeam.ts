import { getPlayersByGroup } from "./getPlayersByGroup";

export async function getPlayersByGroupAndTeam(group: string, team: string) {

  try {
    const playersStorage = await getPlayersByGroup(group)

    const players = playersStorage.filter(player => player.team === team)

    return players
  } catch (error) {
    throw error
  }

}