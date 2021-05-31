export default function Button({
  name = "New button",
  action = () => {},
  type = "button",
}) {
  return (
    <button onClick={action} type={type}>
      {name}
    </button>
  );
}
