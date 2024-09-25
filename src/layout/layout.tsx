import { Box, Container } from '@mui/material'
import { HeaderComponent } from '../components/HeaderComponent'
import { CategoriesComponent } from '../components/CategoriesComponent'
import { StudiosComponent } from '../components/StudiosComponent'
import { GamesComponent } from '../components/GamesComponent'

export const Layout = () => {
  return (
    <Container
      className="bg-containerBg PPPP"
      maxWidth={false}
      sx={{
        flex: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <HeaderComponent />
      <Box
        className="KKK"
        sx={{
          flex: 1,
          height: '100%',
          marginTop: '64px',
          overflowY: 'scroll',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          pb: '10rem',
        }}
      >
        <CategoriesComponent />
        <StudiosComponent />
        <GamesComponent />
      </Box>
    </Container>
  )
}
