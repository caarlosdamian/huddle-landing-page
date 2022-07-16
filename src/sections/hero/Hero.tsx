import { Card } from "../../components/card/Card";
import { CardItem } from "../../components/interfaces/inde";
import { cardItems } from "../../utils/data";
import "./Hero.scss";

export const Hero = () => {
  return (
    <div className="hero-container">
      {cardItems.map((item: CardItem) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
