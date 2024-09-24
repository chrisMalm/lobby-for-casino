import React, { createContext, useContext, useState, useEffect } from 'react'
import data from '../db/games.json'
import { Game, GameContextType } from '../types/gameTypes'
import { Currency } from '../types/currencyTypes'
import { Tag } from '../types/categoriesTypes'

const GameContext = createContext<GameContextType | undefined>(undefined)

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('EUR') // Default currency
  const [games, setGames] = useState<Game[]>([])
  const [activeTag, setActiveTag] = useState<number>(0) // Initialize activeTag
  const [tags, setTags] = useState<Tag[]>([]) // Add state for tags
  const [filteredGamesOnCurrency, setFilteredGamesOnCurrency] = useState<
    Game[]
  >([]) // Filtered games based on currency
  const [filteredGamesByTag, setFilteredGamesByTag] = useState<Game[]>([]) // Filtered games based on selected tag/category

  const handleCategoryClick = (id: number) => {
    const filteredGames = filteredGamesOnCurrency.filter((game) =>
      game.gameTags?.some((tag) => tag === id)
    )
    setFilteredGamesByTag(filteredGames)
    // filter by studio aswell here
  }

  useEffect(() => {
    if (data.tags) {
      console.log(data.tags, 'tags')

      const fetchedTags = data.tags
      setTags([{ id: 0, name: 'All' }, ...fetchedTags]) // Add "All" at the beginning
    }

    setGames(data.games) // Adjust based on your JSON structure
  }, [games])

  return (
    <GameContext.Provider
      value={{
        games,
        setGames,
        currency,
        setCurrency,
        activeTag,
        setActiveTag,
        tags,
        handleCategoryClick,
        setFilteredGamesOnCurrency,
        filteredGamesOnCurrency,
        filteredGamesByTag,
        setFilteredGamesByTag,
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
