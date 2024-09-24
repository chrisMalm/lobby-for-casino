import { Box, Card, CardContent, IconButton, Collapse } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { useGames } from '../context/gamesContext'
import { useState } from 'react'

export const StudiosComponent = () => {
  const {
    filteredStudiosOnCurrency,
    handleclickedStudios,
    setActiveTag,
    activeStudio,
    setActiveStudio,
    setCurrentPage,
  } = useGames()
  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    setExpanded((prev) => !prev)
  }
  const handleStudioClick = (index: number, studioId: number) => {
    console.log('hej')
    handleclickedStudios(studioId)
    setActiveStudio(index)
    setActiveTag(0)
    setCurrentPage(1)
  }
  return (
    <Box className="flex flex-col items-center pt-2 w-full overflow-y-hidden">
      {/* First row of studios (0-5) */}
      <Box className="flex justify-around w-full flex-wrap mb-2">
        {filteredStudiosOnCurrency.slice(0, 6).map((studio, index) => (
          <Card
            className="LLLL"
            key={studio.id}
            onClick={() => handleStudioClick(index, studio.id)}
            sx={{
              width: '150px', // Adjust as needed
              m: 1,
              border:
                activeStudio === index
                  ? '8px solid #8E4DD8'
                  : '4px solid transparent',
              cursor: 'pointer',
            }}
          >
            <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
              <img
                src={studio.imageUrl}
                alt={studio.name}
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Collapse Icon */}
      {filteredStudiosOnCurrency.length > 6 && (
        <>
          <IconButton onClick={handleToggle} sx={{ mt: 1, color: 'white' }}>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>

          {/* Collapsible content for studios (6+) */}
          <Collapse
            in={expanded}
            className="w-full"
            sx={{
              overflowY: 'auto',
              maxHeight: '500px',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
            }}
          >
            <Box className="flex justify-around w-full flex-wrap mt-2">
              {filteredStudiosOnCurrency.slice(6).map((studio, index) => (
                <Card
                  key={studio.id}
                  onClick={() => handleStudioClick(index + 6, studio.id)} // Adjust for correct index
                  sx={{
                    width: '150px', // Adjust as needed
                    m: 1,
                    border:
                      activeStudio === index + 6
                        ? '8px solid #8E4DD8'
                        : '4px solid transparent',
                    cursor: 'pointer',
                  }}
                >
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <img
                      src={studio.imageUrl}
                      alt={studio.name}
                      className="w-full h-auto"
                    />
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Collapse>
        </>
      )}
    </Box>
  )
}
