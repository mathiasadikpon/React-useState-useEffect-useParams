import { useParams } from "react-router-dom";
import MyVideo from "../display/MyVideo";

const AlbumInfo = ({ albumsData }) => {
  const { albumId } = useParams();
  const album = albumsData.find((a) => a.id === parseInt(albumId));
  return (
    <div>
      <h1>Album Info</h1>
      <p>
        {album.title} by {album.artist} - {album.year}
      </p>
      <MyVideo album={album} />
    </div>
  );
};

export default AlbumInfo;
