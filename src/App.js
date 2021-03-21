import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const dishes = [
  "Berboucha (Couscous)",
  "Chekhchoukha",
  "Soup with vegetables",
  "دوبارة بسكرية"
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));

function App() {
  return (
    <div className="App">
      <Header name="El-Maida te3 El-Makla" />
      <Main adjectif="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
