import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepg from './Components/Homepg';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Movies from './Pages/Movies';
import TvShows from './Pages/TvShows';
import Topmovies from './Pages/TopMovies';
import Topshows from './Pages/TopShows';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename='/movieapps'>
      <Header />
      <Homepg/>
      <div>
        <Routes>
          <Route exact path='/movieapps' element={<Homepg />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tvshows' element={<TvShows />} />
          <Route path='/topmovies' element={<Topmovies />} />
          <Route path='/topshows' element={<Topshows />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
