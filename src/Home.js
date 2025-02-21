import MyVideo from "./features/display/MyVideo";
import { useState, useEffect } from "react";

const Home = ({ albumsData }) => {
  const [index, setIndex] = useState(
    Math.floor(Math.random() * albumsData.length)
  );

  const [album, setAlbum] = useState(albumsData[index]);
  useEffect(() => {
    setAlbum(albumsData[index]);
  }, [index]);

  return (
    <>
      <button
        onClick={() => {
          setIndex(Math.floor(Math.random() * albumsData.length));
        }}
      >
        Click Me
      </button>
      <p>
        <h2>
          {album.title} by {album.artist} - {album.year}
        </h2>
      </p>
      <MyVideo album={album} />
    </>
  );
};

export default Home;
