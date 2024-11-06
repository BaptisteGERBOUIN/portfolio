import NavigationBar from './pages/Navbar';
import Accueil from './pages/accueil';
import Projets from './pages/projets';
import Contact from './pages/contact';
import Parcours from './pages/parcours';
// import Interet from './pages/interet';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar  />
      <Accueil />
      <Projets />
      <Parcours />
      {/* <Interet /> */}
      <Contact />
    </div>
  );
}

export default App;
