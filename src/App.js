import './App.css';
import Header from './components/Header';
import SelectCountry from './components/SelectCountry';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <SelectCountry />
      <Cards />
    </div>
  );
}

export default App;
