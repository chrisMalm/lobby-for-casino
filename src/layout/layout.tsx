import { Container } from '@mui/material'
import { HeaderComponent } from '../components/HeaderComponent'
import { CategoriesComponent } from '../components/CategoriesComponent'
import { StudiosComponent } from '../components/StudiosComponent'
import { GamesComponent } from '../components/GamesComponent'
import { useState } from 'react'
import { useGames } from '../context/gamesContext'

export const Layout = () => {
  return (
    <>
      <HeaderComponent />
      <Container
        className="bg-containerBg PPPP"
        maxWidth={false}
        sx={{
          width: '100%',
          height: 'calc(100vh - 64px)',
          overflowY: 'hidden',
        }}
      >
        <CategoriesComponent />
        <StudiosComponent />
        <GamesComponent />
      </Container>
    </>
  )
}
