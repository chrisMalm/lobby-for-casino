import React, { createContext, useContext, useState, useEffect } from 'react'
import data from '../db/games.json'
import { Game, GameContextType } from '../types/gameTypes'

const GameContext = createContext<GameContextType | undefined>(undefined)


export const GameProvider = ({ children }: { children: React.ReactNode }) => {

    const [games, setGames] = useState<Game[]>([])

    
  useEffect(() => {
   
    setGames(data.games) // Adjust based on your JSON structure
    
  }, [games])

  return (
    <GameContext.Provider
      value={{
        games,
        setGames,

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
