// React Router parts:
// - BrowserRouter needs to exist higher up in the component tree than whatever we are writing Routes in
// - Routes need to exist, determine what content is rendered on which route eg. /about for <anout/>
// - Route specifies URL and component, belongs to Routes

import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import PokemonFetcherPage from './pages/PokemonFetcherPage';

function App() {
  return (
    <div className="App">

      <h1>This h1 shows on every page</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage/>} />

        {/* Route for /about opening - BUT WITH AN EXTRA SLASH; STILL VALID, BUT GENERALLY DO BELOW
        <Route path="/about" element={<AboutPage />}>*/}

          {/* Route for /about/contact
          <Route path="/about/contact" element={<ContactPage/>} /> */}

        {/* Route for /about closing
        </Route> */}


        {/* Route for /about opening */}
        {/* <Route path="about" element={<AboutPage />}> */}

          {/* Route for /about/contact */}
          {/* <Route path="contact" element={<ContactPage/>} /> */}

        {/* Route for /about closing */}
        {/* </Route> */}


        <Route path="/about" element={<Outlet />}>
          <Route index element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        <Route path="/pokemon" element={<PokemonFetcherPage />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonFetcherPage />} />
        
      </Routes>

    </div>
  );
}

export default App;
