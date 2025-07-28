import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { movies } from '../data/movies';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="movie-detail">
        <h2>Movie not found</h2>
        <Link to="/" className="back-link">← Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <div className="detail-header">
        <Link to="/" className="back-link">← Back to Dashboard</Link>
        <h1>{movie.title}</h1>
      </div>

      <div className="detail-content">
        <div className="detail-poster">
          <img src={movie.poster} alt={movie.title} />
        </div>

        <div className="detail-info">
          <div className="basic-info">
            <h2>Basic Information</h2>
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Rating:</strong> ⭐ {movie.rating}/10</p>
            <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
          </div>

          <div className="financial-info">
            <h2>Financial Data</h2>
            <p><strong>Budget:</strong> ${movie.budget.toLocaleString()}</p>
            <p><strong>Box Office:</strong> ${movie.boxOffice.toLocaleString()}</p>
            <p><strong>Profit:</strong> ${(movie.boxOffice - movie.budget).toLocaleString()}</p>
          </div>

          <div className="cast-info">
            <h2>Cast</h2>
            <ul>
              {movie.cast.map((actor, index) => (
                <li key={index}>{actor}</li>
              ))}
            </ul>
          </div>

          <div className="plot-info">
            <h2>Plot Summary</h2>
            <p>{movie.plot}</p>
          </div>

          <div className="awards-info">
            <h2>Awards & Recognition</h2>
            <ul>
              {movie.awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail; 