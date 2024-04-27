import './App.css';
import { MainContainer } from '../../ui/MainContainer/MainContainer';
import { Dictionary } from '../../../config/variables';

function App() {
  localStorage.setItem(Dictionary, 'ru');

  return (
     <MainContainer />
  );
}

export default App;
