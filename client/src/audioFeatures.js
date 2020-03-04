import React, { Component } from 'react';
import './App.css';
import Spotify from 'spotify-web-api-js';

const SpotifyWebApi = new Spotify();

class AudioFeatures extends Component {
  constructor(){
    super();
  }
  getAudioFeatures() {
    SpotifyWebApi.getAudioFeaturesForTrack()
      .then((response) => {
        this.setState({
          songFeatures: response
        })
      }
    )

    // getAudioFeaturesForTrack = function(trackId, callback) {
    //   var requestData = {};
    //   requestData.url = _baseUri + '/audio-features/' + trackId;
    //   return _checkParamsAndPerformRequest(requestData, {}, callback);
    // };
  }

  render() {
    return (
      <div className = "AudioFeatures">
        <a href='href://localhost:8888'>
        <div> Selected song audio features: { this.state.songFeatures }</div>
        </a>
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