import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const Album = ({ album }) => {
  const { id, title, artist, year } = album;
  return (
    <Link>
      <Card>
        <CardImg src={image} alt={title} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};

export default Album;
