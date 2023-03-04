// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div className="popup-container">
      <Popup
        model
        position="center"
        trigger={
          <button className="thumbnail-btn" type="button">
            <img
              className="thumbnail-image"
              alt="thumbnail"
              src={thumbnailUrl}
            />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="video-container">
            <div className="wrong-icon-container">
              <button
                onClick={() => close()}
                className="wrong-btn"
                type="button"
              >
                <IoMdClose className="wrong-icon" />
              </button>
            </div>
            <ReactPlayer url={videoUrl} />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
