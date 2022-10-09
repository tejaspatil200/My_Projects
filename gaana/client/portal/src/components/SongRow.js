import { url } from "../common/constants";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./SongRow.css";

const SongRow = ({ song, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [stopPlaying, setStopPlaying] = useState(true);
  const [audio, setAudio] = useState(new Audio(url + "/" + song.songFile));
  const history = useHistory();

  // create an object of audio with the song file
  // const audio = new Audio(url + "/" + song.songFile);

  //by putting the audio into the state we prevent React from refreshing the audio value on each rerender, and thus the reference problem is solved.

  const togglePlaying = () => {
    if (isPlaying) {
      console.log("pause the music");
      audio.pause();
      setIsPlaying(false);
      setStopPlaying(true);
    } else if (stopPlaying) {
      console.log("play the music");
      audio.play();
      setIsPlaying(true);
      setStopPlaying(false);
    }
  };

  return (
    <tr onClick={togglePlaying}>
      <td>{index + 1}</td>
      <td></td>
      <td>
        <img src={url + "/" + song.thumbnail} alt="" className="thumbnail-sm" />
        {song.title}
      </td>
      <td>
        {song.artistFirstName} {song.artistLastName}
      </td>
      <td>{song.duration}</td>
      <td>
        {isPlaying === true && (
          <img
            onClick={togglePlaying}
            className="btn-media"
            src="images/pause.png"
          />
        )}

        {stopPlaying === true && (
          <img
            onClick={togglePlaying}
            className="btn-media"
            src="images/play.png"
          />
        )}
      </td>
    </tr>
  );
};

export default SongRow;
