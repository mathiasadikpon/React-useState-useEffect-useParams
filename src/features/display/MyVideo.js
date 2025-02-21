const MyVideo = ({ album }) => {
  const { id, title, year, src } = album;
  return (
    <>
      <iframe
        width="560"
        height="315"
        src={src}
        title={title}
        frameborder="5"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default MyVideo;
