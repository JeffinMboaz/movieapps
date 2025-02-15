import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Topshows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/tv/top_rated?api_key=1f698941c0f28691e6c2b132251a83e9')
      .then(response => setShows(response.data.results))
      .catch(error => console.error('Error fetching tv shows', error));
  }, []);

  return (
    <div className="container-fluid mt-5 py-5 moviecards">
      <h2 className="text-center my-4 p-2 rounded bg-secondary">Popular TV Shows</h2>
      <div className="row g-4">
        {shows.map(show => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={show.id}>
            <div className="card h-100 bg-dark text-white">
              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{show.name}</h5>
                <p className="card-text fw-bold">IMDb:⭐{show.vote_average}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topshows;
