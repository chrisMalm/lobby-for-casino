

export interface Game {
  id: number
  name: string
  imageUrl: string
  studioId: number
  gameTags?: number[]
}

export interface GameContextType {

  games: Game[]
  setGames: React.Dispatch<React.SetStateAction<Game[]>>
}