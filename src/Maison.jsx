export default function Maison({ type, nbPvDefaut }) {
  return (
    <div className={type}>
      <p>Maison en {type}</p>
      <p>({nbPvDefaut} PV)</p>
    </div>
  );
}
