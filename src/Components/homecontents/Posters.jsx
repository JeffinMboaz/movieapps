import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Posters() {
    const [Mvposter, setMvposter] = useState([])
    const [shposter, setShposter] = useState([])

    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(
            "https://api.themoviedb.org/3/movie/popular?api_key=1f698941c0f28691e6c2b132251a83e9"
          );
          setMvposter(response.data.results);
          console.log(response.data.results);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchMovies();
    }, []);
  
    useEffect(() => {
        const fetchShows = async () => {
            try {
                const response = await axios.get(
                    "https://api.themoviedb.org/3/discover/tv?api_key=1f698941c0f28691e6c2b132251a83e9"
                );
                setShposter(response.data.results);
                console.log(response.data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchShows();
    }, []);
    return (
        <>
        <div className='movieposters rounded my-5'>
        <div className="container-fluid  m-3 p-3">
          <h2 className="text-left mb-3 h4">Popular Movies</h2>
          <div className="scroll-container">
            {Mvposter.map((mvposter, index) => (
              <div key={index} className="poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500${mvposter.poster_path}`}
                  alt=""
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='movieposters rounded'>
            <div className="container-fluid  m-3 p-3">
                <h2 className="text-left mb-3 h4">Tv Shows</h2>
                <div className="scroll-container">
                    {shposter.map((shposter, index) => (
                        <div key={index} className="poster">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${shposter.poster_path}`}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        </>
      
  )
}

export default Posters
