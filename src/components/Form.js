import Button from "./Button";

export default function Form({ action }) {
  function handleSubmit(e) {
    e.preventDefault();
    action(e.target.search.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" />
      <Button name="Search" type="submit" />
    </form>
  );
}
