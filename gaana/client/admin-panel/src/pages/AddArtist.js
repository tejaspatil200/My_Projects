import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { url } from "../common/constants";

const AddArtist = () => {
  const [thumbnail, setThumbnail] = useState(undefined);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // get the history object
  const history = useHistory();

  // gets called when user selects an image
  const onFileSelect = (event) => {
    setThumbnail(event.target.files[0]);
  };

  const addArtistToDB = () => {
    if (firstName.length === 0) {
      alert("select first name");
    } else if (lastName.length === 0) {
      alert("select last name");
    } else if (!thumbnail) {
      alert("select thumbnail");
    } else {
      // when a file needs to be uploaded use FormData
      const data = new FormData();

      // add the data
      data.append("firstName", firstName);
      data.append("lastName", lastName);
      data.append("thumbnail", thumbnail);

      // send the data to the API
      axios.post(url + "/artist", data).then((response) => {
        const result = response.data;
        if (result.status === "success") {
          alert("successfully added an artist");

          // go to the list of artists
          history.push("/artists");
        } else {
          alert("error while adding artist");
        }
      });
    }
  };

  return (
    <div>
      <h1 className="page-title">Add Artist</h1>

      <div className="mb-3">
        <label htmlFor="">First Name</label>
        <input
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="">Last Name</label>
        <input
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="">Thumbail</label>
        <input
          accept="image/*"
          onChange={onFileSelect} //setThumbnail(event.target.files[0])
          type="file"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <button onClick={addArtistToDB} className="btn btn-success">
          Add
        </button>

        <Link to="/artists">
          <a className="btn btn-warning">Back</a>
        </Link>
      </div>
    </div>
  );
};

export default AddArtist;
