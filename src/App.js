import './App.css';
import Header from './components/Header';
import SelectCountry from './components/SelectCountry';
import Cards from './components/Cards';
import ChartTable from './components/ChartTable';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <SelectCountry />
      <Cards />
      <ChartTable />
    </div>
  );
}

export default App;
