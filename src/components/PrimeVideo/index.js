import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = ({moviesList}) => {
  const actionMovies = moviesList.filter(movie => movie.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(movie => movie.categoryId === 'COMEDY')

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-banner"
      />
      <div className="movies-section">
        <h1 className="genre-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} />
      </div>
      <div className="movies-section">
        <h1 className="genre-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
