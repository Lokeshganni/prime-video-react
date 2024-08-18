import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = ({movieDetails}) => {
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <Popup
      modal
      trigger={
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      }
      className="popup-content"
    >
      {close => (
        <div className="video-popup">
          <button
            type="button"
            className="close-button"
            data-testid="closeButton"
            onClick={() => close()}
            aria-label="close button"
          >
            <IoMdClose size={30} color="#ffffff" />
          </button>
          <ReactPlayer url={videoUrl} controls />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
