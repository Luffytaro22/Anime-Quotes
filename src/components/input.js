export default function Input() {
  return (
    <div id="input-container">
      <h1>Enter the anime!</h1>
      <span id="span-container">
        <input id="input-quote" type="text" required />
        <i className="fa-solid fa-right-to-bracket" />
      </span>
    </div>
  );
}
