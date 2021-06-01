import React from "react";
import getGiphies from "../api/giphies.js";
import Form from "./Form.js";
import Images from "./Images.js";
import Loader from "./Loader.js";
export default function ImageListFunc({ name }) {
  const [searchTerm, setSearchterm] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [images, setImages] = React.useState([]);
  function loadImages(searchTerm) {
    if (searchTerm !== "") {
      setLoader(true);
      getGiphies(searchTerm).then((payload) => {
        // console.dir(payload.data);
        setImages(payload.data);
        setLoader(false);
      });
    }
  }
  return (
    <div className="content">
      <h2>{name}</h2>
      <Form
        action={(param) => {
          loadImages(param);
        }}
      />
      {loader ? <Loader /> : <Images images={images} />}
    </div>
  );
}
