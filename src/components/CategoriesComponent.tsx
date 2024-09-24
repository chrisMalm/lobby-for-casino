import { Box, ButtonGroup, Button, IconButton, Collapse } from '@mui/material'
import { useState } from 'react'
import { useGames } from '../context/gamesContext'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

export const CategoriesComponent = () => {
  const {
    tags,
    handleCategoryClick,
    setActiveTag,
    activeTag,
    setActiveStudio,
    setCurrentPage,
  } = useGames()

  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    setExpanded((prev) => !prev)
  }
  const handleTagClick = (index: number, id: number) => {
    handleCategoryClick(id)
    setActiveTag(index)
    setActiveStudio(null)
    setCurrentPage(1)
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={2}
      width="100%"
      className="RRR"
    >
      <ButtonGroup
        aria-label="tags"
        sx={{
          justifyContent: 'space-between',
          width: '100%',
          flexWrap: 'wrap',
          mb: 2,
        }}
      >
        {tags.slice(0, 6).map((tag, index) => (
          <Button
            onClick={() => handleTagClick(index, tag.id)}
            key={tag.id}
            sx={[
              {
                flexGrow: 1,
                width: { xs: '100%', sm: 'auto' },
                my: 1,
                bgcolor: activeTag === index ? '#8E4DD8' : 'transparent',
                color: 'white',

                mx: 0.5,
                border: 'none',
                '&:hover': {
                  fontWeight: '800',
                },
              },
            ]}
          >
            {tag.name}
          </Button>
        ))}
      </ButtonGroup>
      {tags.length > 6 && (
        <>
          <IconButton onClick={handleToggle} sx={{ mt: 1, color: 'white' }}>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <Collapse in={expanded} sx={{ width: '100%' }}>
            <ButtonGroup
              aria-label="additional tags"
              sx={{
                mt: 1,
                justifyContent: 'space-between',
                width: '100%',
                flexWrap: 'wrap',
              }}
            >
              {tags.slice(6).map((tag, index) => (
                <Button
                  onClick={() => handleTagClick(index + 6, tag.id)} // Adjust index for clicked tag
                  key={tag.id}
                  sx={[
                    {
                      flexGrow: 1,
                      width: { xs: '100%', sm: 'auto' },
                      my: 1,
                      p: 1,
                      bgcolor:
                        activeTag === index + 6 ? '#8E4DD8' : 'transparent',
                      color: 'white',
                      mx: 0.5,
                      border: 'none',

                      '&:hover': {
                        fontWeight: '800',
                      },
                    },
                  ]}
                >
                  {tag.name}
                </Button>
              ))}
            </ButtonGroup>
          </Collapse>
        </>
      )}
    </Box>
  )
}
