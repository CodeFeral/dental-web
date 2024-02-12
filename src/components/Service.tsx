interface ServiceProps {
  image: string;
}

export default function Service(props: ServiceProps) {
  return (
    <div>
      <img src={props.image} />
      <h2>title</h2>
      <p>service text</p>
    </div>
  );
}
