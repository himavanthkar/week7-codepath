import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../data/movies';
import RatingChart from './RatingChart';
import GenreChart from './GenreChart';

const Dashboard = () => {
  const [showCharts, setShowCharts] = useState(true);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Movie Analytics Dashboard</h1>
        <button 
          className="toggle-btn"
          onClick={() => setShowCharts(!showCharts)}
        >
          {showCharts ? 'Hide Charts' : 'Show Charts'}
        </button>
      </div>

      {showCharts && (
        <div className="charts-section">
          <div className="chart-grid">
            <div className="chart-item">
              <RatingChart movies={movies} />
            </div>
            <div className="chart-item">
              <GenreChart movies={movies} />
            </div>
          </div>
        </div>
      )}

      <div className="movies-section">
        <h2>Movie Collection</h2>
        <div className="movies-grid">
          {movies.map(movie => (
            <Link 
              key={movie.id} 
              to={`/movie/${movie.id}`} 
              className="movie-card"
            >
              <div className="movie-poster">
                <img src={movie.poster} alt={movie.title} />
              </div>
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p className="movie-year">{movie.year}</p>
                <p className="movie-genre">{movie.genre}</p>
                <p className="movie-rating">⭐ {movie.rating}</p>
                <p className="movie-director">Director: {movie.director}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 