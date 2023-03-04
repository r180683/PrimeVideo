// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const MoviesSlider = props => {
  const {movies} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movies.map(each => (
          <MovieItem key={each.id} movieDetails={each} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
