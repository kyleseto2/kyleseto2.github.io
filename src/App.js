import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import About from './pages/About Me/About';
import Contact from './pages/Contact Me/Contact';
import Projects from './pages/Projects/Projects';
import GlobalStyle from './globalStyles';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Projects" exact component={Projects} />
        <Route path="/Contact" exact component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
