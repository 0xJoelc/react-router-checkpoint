import { Card } from "antd";
import { Link } from "react-router";
import TrailerPage from "./TrailerPage";
import { movieData } from "../data";

const { Meta } = Card;

const MovieCard = ({ posterURL, title, rating, description, movieID }) => {
  return (
    <Card
      hoverable
      //   style={{ width: 240 }}
      cover={
        <img
          className="w-[100px] h-[250px] object-cover"
          alt="example"
          src={posterURL}
        />
      }
    >
      <Meta
        title={title}
        description={
          <div>
            <p>{rating}</p>
            <p>{description}</p>
            <Link to={`/${movieID}`}>more details</Link>
          </div>
        }
      />
    </Card>
  );
};

export default MovieCard;
