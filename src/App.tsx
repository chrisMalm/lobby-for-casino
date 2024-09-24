import './index.css'; 
import { GameProvider } from './context/gamesContext';
import { Layout } from './layout/layout';


export const App = () => {
  return (
    <GameProvider>
      <Layout />
    </GameProvider>
  );
}


