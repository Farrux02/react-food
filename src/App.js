import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {Notfound} from './pages/Notfound';
import {Categories} from './pages/Categories';
import {Recipe} from './pages/Recipe';

function App() {
  return (
    <>
        <Router basename='/react-food'>
      <Header/>
      <main className='container content'>
          <Switch>
            <Route exact path="/" >
              <Home/>
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contact} />
            <Route path="/categories/:name" component={Categories} />
            <Route path="/meal/:id" component={Recipe} />
            <Route component={Notfound} />
          </Switch>
      </main>
      <Footer/>
        </Router>
    </>
  );
}

export default App;
