// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )
  return (
    <div className="app-container">
      <img
        className="prime-video-image"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />
      <div className="all-movies-container">
        <h1 className="action-movies-head">Action Movies</h1>
        <MoviesSlider movies={actionMoviesList} />
        <h1 className="action-movies-head">Comedy Movies</h1>
        <MoviesSlider movies={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
