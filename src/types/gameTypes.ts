import { Tag } from './categoriesTypes'
import { Currency } from './currencyTypes'

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
  currency: Currency
  setCurrency: React.Dispatch<React.SetStateAction<Currency>>
  activeTag: number
  setActiveTag: React.Dispatch<React.SetStateAction<number>>
  tags: Tag[]
  handleCategoryClick: Function
  filteredGamesOnCurrency: Game[]
  setFilteredGamesOnCurrency: React.Dispatch<React.SetStateAction<Game[]>>
  filteredGamesByTag: Game[]
  setFilteredGamesByTag: React.Dispatch<React.SetStateAction<Game[]>>
}
