import Button from "./Button";

export default function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" />
      <Button name="Search" action={() => {}} type="submit" />
    </form>
  );
}
