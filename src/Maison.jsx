import { useState } from "react";

export default function Maison({ type, nbPvDefaut }) {
  const [nbPvActuels, setNbPvActuels] = useState(nbPvDefaut);

  function handleSouffler() {
    setNbPvActuels((nbPvActuels) => nbPvActuels - 1);
  }
  if (nbPvActuels > 0) {
    return (
      <div className={type}>
        <p>Maison en {type}</p>
        <p>({nbPvActuels} PV)</p>
        <button onClick={handleSouffler}>Souffler</button>
      </div>
    );
  }
}
