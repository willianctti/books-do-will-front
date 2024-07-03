import './card.css';

interface Props {
  title: string;
  image: string;
  description: string;
}

export function Card({ title, image, description }: Props) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>Minha opinião do livro: </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
