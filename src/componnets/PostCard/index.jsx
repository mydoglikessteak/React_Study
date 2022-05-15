export const PostCard = ({ tittle, cover, body, id }) => {
  return (
    <div className="post">
      <img src={cover} alt={tittle}></img>
      <div key={id} className="content">
        <h2>{tittle}</h2>
        <p> {body} </p>
      </div>
    </div>
  );
};
