import React, { Component } from 'react';
import './App.css';

class AudioFeatures extends Component {
  constructor(props) {
    super(props);
    console.log('props', props)
    this.state = {
      track: this.props.id,
      oAuth: this.props.oAuth.slice(13),
      songFeatures: ''
    };
  }
  componentDidMount() {
    const spotifyURL = "https://api.spotify.com/v1/audio-features/"
    fetch((spotifyURL + this.state.track), {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": ("Bearer " + this.state.oAuth)
      }
    })
    .then((response) => {
      this.setState({
        songFeatures: {
          danceability: response.danceability
        }
      })
    })
  }

  render() {
    return (
    <div className = "AudioFeatures">
        <div> Selected song audio features: { this.state.songFeatures.danceability }</div>
    </div>
    )
  }
}

export default AudioFeatures;


// {
//   "danceability": 0.735,
//   "energy": 0.578,
//   "key": 5,
//   "loudness": -11.84,
//   "mode": 0,
//   "speechiness": 0.0461,
//   "acousticness": 0.514,
//   "instrumentalness": 0.0902,
//   "liveness": 0.159,
//   "valence": 0.624,
//   "tempo": 98.002,
//   "type": "audio_features",
//   "id": "06AKEBrKUckW0KREUWRnvT",
//   "uri": "spotify:track:06AKEBrKUckW0KREUWRnvT",
//   "track_href": "https://api.spotify.com/v1/tracks/06AKEBrKUckW0KREUWRnvT",
//   "analysis_url": "https://api.spotify.com/v1/audio-analysis/06AKEBrKUckW0KREUWRnvT",
//   "duration_ms": 255349,
//   "time_signature": 4
// }
