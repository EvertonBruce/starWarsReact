import Header from './components/header.js'
import './App.css';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./pages/home";
import People from "./pages/people";
import Planets from "./pages/planets";
import Starships from "./pages/starships";
import Vehicles from "./pages/vehicles";
import Films from "./pages/films";
import Species from "./pages/species";

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
