import axios from "axios";
import { useState, useEffect } from "react";
import { url } from "../common/constants";
import HorizontalSlider from "../components/HorizontalSlider";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getArtists();
    getAlbums();
  }, []); //[] empty array means once component is loaded we get these 2 function call

  const getAlbums = () => {
    // send the GET request
    axios.get(url + "/album").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setAlbums(result.data);
      } else {
        alert("error occured while getting all albums");
      }
    });
  };

  const getArtists = () => {
    // send the GET request
    axios.get(url + "/artist").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setArtists(
          result.data.map((artist) => {
            return {
              ...artist,
              title: `${artist.firstName} ${artist.lastName}`,
            };
          })
        );
      } else {
        alert("error occured while getting all artists");
      }
    });
  };

  const getSongsOfSelectedArtist = (artist) => {
    // send the GET request
    axios.get(url + "/artist/songs/" + artist.id).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        history.push("/songs-list", {
          songs: result.data,
          title: artist.title,
          thumbnail: artist.thumbnail,
        });
      } else {
        alert("error occured while getting all artists");
      }
    });
  };

  const getSongsOfSelectedAlbum = (album) => {
    // send the GET request
    axios.get(url + "/album/songs/" + album.id).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        history.push("/songs-list", {
          songs: result.data,
          title: album.title,
          thumbnail: album.thumbnail,
        });
      } else {
        console.log(result.error);
        alert("error occured while getting all album");
      }
    });
  };

  return (
    <div className="home-col-main">
      <h2 className="page-title, home-col">Home</h2>

      <HorizontalSlider
        onItemSelect={getSongsOfSelectedArtist}
        items={artists}
        title="Featured Artists"
      />

      <HorizontalSlider
        onItemSelect={getSongsOfSelectedAlbum}
        items={albums}
        title="Featured Albums"
      />
    </div>
  );
};

export default Home;
