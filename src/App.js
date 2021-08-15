import Header from './components/Header'
import './App.css';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import People from "./pages/People.jsx";
import Planets from "./pages/Planets.jsx";
import Starships from "./pages/Starships.jsx";
import Vehicles from "./pages/Vehicles.jsx";
import Films from "./pages/Films";
import Species from "./pages/Species.jsx";

function App() {
  return (
    <HashRouter>
      <div>
        <div className="App">
          <Header/>
        </div>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/people" component={People}/>
          <Route path="/planets" component={Planets}/>
          <Route path="/starships" component={Starships}/>
          <Route path="/vehicles" component={Vehicles}/>
          <Route path="/films" component={Films}/>
          <Route path="/species" component={Species}/>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
