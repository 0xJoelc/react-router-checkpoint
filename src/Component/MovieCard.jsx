import { Card } from "antd";
const { Meta } = Card;

const MovieCard = ({ posterURL, title, rating, description }) => {
  return (
    <Card
      hoverable
    //   style={{ width: 240 }}
      cover={
        <img className="w-[100px] h-[250px] object-cover"
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
          </div>
        }
      />
    </Card>
  );
};

export default MovieCard;
