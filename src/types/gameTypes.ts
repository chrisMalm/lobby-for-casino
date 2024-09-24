import { Tag } from './categoriesTypes'
import { Currency } from './currencyTypes'
import { Studios } from './studioTypes'

export interface Game {
  id: number
  name: string
  imageUrl: string
  studioId: number
  gameTags?: number[]
}

export interface GameContextType {
  studios: Studios[]
  tags: Tag[]
  games: Game[]
  setGames: React.Dispatch<React.SetStateAction<Game[]>>
  currency: Currency
  setCurrency: React.Dispatch<React.SetStateAction<Currency>>
  filteredGamesOnCurrency: Game[]
  setFilteredGamesOnCurrency: React.Dispatch<React.SetStateAction<Game[]>>
  filteredStudiosOnCurrency: Studios[]
  setFilteredStudiosOnCurrency: React.Dispatch<React.SetStateAction<Studios[]>>
  handleCategoryClick: Function
  filteredGamesByTag: Game[]
  setFilteredGamesByTag: React.Dispatch<React.SetStateAction<Game[]>>
  handleclickedStudios: Function
  setFilteredGamesByStudio: React.Dispatch<React.SetStateAction<Studios[]>>
  filteredStudiosByStudio: Studios[]
  activeTag: number
  setActiveTag: React.Dispatch<React.SetStateAction<number>>
  activeStudio: number | null
  setActiveStudio: React.Dispatch<React.SetStateAction<number | null>>
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}
