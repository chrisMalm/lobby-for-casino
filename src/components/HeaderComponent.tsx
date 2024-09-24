import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Select,
  MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useGames } from '../context/gamesContext'

export const HeaderComponent = () => {
  const {
    currency,
    setCurrency,
    setFilteredGamesByStudio,
    setFilteredGamesByTag,
    setActiveTag,
    setActiveStudio,
  } = useGames()

  const handleCurrencyChange = (event: any) => {
    setCurrency(event.target.value)
    setFilteredGamesByTag([])
    setFilteredGamesByStudio([])
    setActiveTag(0)
    setActiveStudio(null)
  }

  return (
    <AppBar position="static">
      <Toolbar className="AAA bg-black ">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Box ml="auto">
          <Select
            value={currency}
            onChange={handleCurrencyChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Currency' }}
            sx={{ color: 'white', border: 'none' }}
          >
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="mBTC">mBTC</MenuItem>
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
