import { Routes, Route, Link } from "react-router-dom";
import AlbumsList from "./features/albums/AlbumsList";
import AlbumInfo from "./features/albums/AlbumInfo";
import Home from "./Home";
import { getAlbumsData } from "./features/albums/albumsSlice";

const App = () => {
  const albumsData = getAlbumsData();

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/albums">Albums</Link>
        </li>
      </ul>
      <br />
      <Routes>
        <Route path="/" element={<Home albumsData={albumsData} />} />
        <Route
          path="/albums"
          element={<AlbumsList albumsData={albumsData} />}
        />
        <Route
          path="/albums/:albumId"
          element={<AlbumInfo albumsData={albumsData} />}
        />
      </Routes>
    </div>
  );
};

export default App;
