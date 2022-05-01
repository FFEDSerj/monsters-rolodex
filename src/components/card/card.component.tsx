import "./card.styles.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const Card = ({ id, name, email }: Monster) => (
  <div className="card-container">
    <img alt={name} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default Card;
