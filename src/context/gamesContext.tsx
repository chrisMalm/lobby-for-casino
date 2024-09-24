import React, { createContext, useContext, useState, useEffect } from 'react'
import data from '../db/games.json'
import { Currency } from '../types/currencyTypes'
import { Game, GameContextType } from '../types/gameTypes'
import { Studios } from '../types/studioTypes'
import { Tag } from '../types/categoriesTypes'

const GameContext = createContext<GameContextType | undefined>(undefined)

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [studios, setStudios] = useState<Studios[]>([])
  const [activeTag, setActiveTag] = useState<number>(0)
  const [activeStudio, setActiveStudio] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [filteredGamesOnCurrency, setFilteredGamesOnCurrency] = useState<
    Game[]
  >([]) // Filtered games based on currency
  const [filteredGamesByTag, setFilteredGamesByTag] = useState<Game[]>([]) // Filtered games based on selected tag/category
  const [games, setGames] = useState<Game[]>([])
  const [filteredStudiosOnCurrency, setFilteredStudiosOnCurrency] = useState<
    Studios[]
  >([])
  const [filteredStudiosByStudio, setFilteredGamesByStudio] = useState<
    Studios[]
  >([])
  const [currency, setCurrency] = useState<Currency>('EUR') // Default currency
  const [tags, setTags] = useState<Tag[]>([])

  const handleCategoryClick = (id: number) => {
    const filteredGames = filteredGamesOnCurrency.filter((game) =>
      game.gameTags?.some((tag) => tag === id)
    )
    setFilteredGamesByTag(filteredGames)
    setFilteredGamesByStudio([])
  }

  const handleclickedStudios = (id: number) => {
    const filteredGames = filteredGamesOnCurrency.filter(
      (game) => game.studioId === id
    )
    setFilteredGamesByStudio(filteredGames)
    setFilteredGamesByTag([])
  }

  useEffect(() => {
    let filteredStudios: Studios[] = []
    // Load games from JSON data
    const fetchedTags = data.tags
    // Add "All" option to the tags
    setTags([{ id: 0, name: 'All' }, ...fetchedTags])
    setGames(data.games)
    setStudios(data.studios)
    const filterGamesByCurrency = () => {
      filteredStudios = studios.filter((studio) => {
        return (
          studio.blockedCurrencies === '' ||
          !studio.blockedCurrencies?.includes(currency)
        )
      })

      const studioIds = filteredStudios.map((studio) => studio.id)

      // Filter games where the studioId is in the filtered studios list
      const filteredGames = games.filter((game) =>
        studioIds.includes(game.studioId)
      )

      return filteredGames
    }

    const newFilteredGames = filterGamesByCurrency()
    setFilteredGamesOnCurrency(newFilteredGames)
    setFilteredStudiosOnCurrency(filteredStudios)
  }, [games, currency, studios])

  return (
    <GameContext.Provider
      value={{
        games,
        currency,
        setCurrency,
        tags,
        studios,
        setGames,
        filteredGamesOnCurrency,
        setFilteredGamesOnCurrency,
        filteredStudiosOnCurrency,
        setFilteredStudiosOnCurrency,
        setFilteredGamesByTag,
        filteredGamesByTag,
        handleCategoryClick,
        handleclickedStudios,
        setFilteredGamesByStudio,
        filteredStudiosByStudio,
        activeTag,
        setActiveTag,
        setActiveStudio,
        activeStudio,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGames = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGames must be used within a GameProvider')
  }
  return context
}
