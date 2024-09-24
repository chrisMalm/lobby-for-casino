import { Box, Card, CardContent, Typography, Button } from '@mui/material'
import React from 'react'
import { useGames } from '../context/gamesContext'
import { Game } from '../types/gameTypes'

export const GamesComponent = () => {
  const {
    filteredGamesOnCurrency,
    filteredGamesByTag,
    filteredStudiosByStudio,
    setCurrentPage,
    currentPage,
  } = useGames()

  const gamesPerPage = 10

  const gamesToDisplay: Game[] =
    filteredGamesByTag.length > 0
      ? (filteredGamesByTag as Game[]) // If there are tags filtered, show those games
      : filteredStudiosByStudio.length > 0
      ? (filteredStudiosByStudio as Game[]) // If there are studios filtered, show those games
      : filteredGamesOnCurrency // Otherwise, show all games

  const indexOfLastGame = currentPage * gamesPerPage
  const indexOfFirstGame = indexOfLastGame - gamesPerPage
  const currentGames = gamesToDisplay.slice(indexOfFirstGame, indexOfLastGame)

  const handleNextPage = () => {
    if (indexOfLastGame < gamesToDisplay.length) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }
  return (
    <Box
      mt={4}
      className="flex flex-col items-center pt-2 w-full overflow-y-hidden"
    >
      <Box className="grid grid-cols-5 gap-4 w-full mb-2">
        {currentGames.map((game) => (
          <Card key={game.id} sx={{ width: '150px', m: 1 }}>
            <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
              <img
                src={game.imageUrl}
                alt={game.name}
                className="w-full h-auto"
              />
            </CardContent>
            <Typography> {game.name}</Typography>
          </Card>
        ))}
      </Box>

      {/* Pagination Controls */}
      <Box mt={2} className="flex justify-between w-full">
        <Button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          sx={{ color: '#8E4DD8', fontWeight: '800' }}
        >
          Previous
        </Button>
        <Typography sx={{ color: '#8E4DD8', fontWeight: '800' }}>
          Page {currentPage}
        </Typography>
        <Button
          onClick={handleNextPage}
          disabled={indexOfLastGame >= gamesToDisplay.length}
          sx={{ color: '#8E4DD8', fontWeight: '800' }}
        >
          Next
        </Button>
      </Box>
    </Box>
  )
}
