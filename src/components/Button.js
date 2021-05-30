export default function Button({ name, action = () => {}, type = "button" }) {
  return (
    <button onClick={action} type={type}>
      {name}
    </button>
  );
}
