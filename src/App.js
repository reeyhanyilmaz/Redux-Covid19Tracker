import './App.css';
import Header from './components/Header';
import SelectCountry from './components/SelectCountry';
import Cards from './components/Cards';
import ChartTable from './components/ChartTable';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App max-w-7xl">
        <Header />
        <SelectCountry />
        <Cards />
        <ChartTable />
        <Footer />
    </div>
  );
}

export default App;
