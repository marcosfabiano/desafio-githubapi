import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import PerfilSearch from 'pages/PerfilSearch';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/perfilsearch">
        <PerfilSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
