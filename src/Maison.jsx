export default function Maison({ type, nbPvDefaut }) {
  function handleSouffler() {
    console.log("soufflé");
  }

  return (
    <div className={type}>
      <p>Maison en {type}</p>
      <p>({nbPvDefaut} PV)</p>
      <button onClick={handleSouffler}>Souffler</button>
    </div>
  );
}
