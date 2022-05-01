import Card from "../card/card.component";
import { Monster } from "../card/card.component";
import "./card-list.styles.css";

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card key={monster.id} {...monster} />
    ))}
  </div>
);

export default CardList;
