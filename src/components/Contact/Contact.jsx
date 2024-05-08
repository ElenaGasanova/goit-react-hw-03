export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div>
      <p className="">{name}</p>
      <p className="">{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
