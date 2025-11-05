export default function Maison({ type, nbPv, onSouffler }) {
  if (nbPv > 0) {
    return (
      <div className={type}>
        <p>Maison en {type}</p>
        <p>({nbPv} PV)</p>
        <button onClick={() => onSouffler(type)}>Souffler</button>
      </div>
    );
  }
}
