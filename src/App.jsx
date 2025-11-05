import { useState } from "react";
import "./App.css";
import Maison from "./Maison";

export default function App() {
  const [finPartie, setFinPartie] = useState(false);
  const [pvMaisons, setPvMaisons] = useState({
    paille: 1,
    bois: 2,
    briques: 3,
  });

  function handleSouffler(type) {
    const newPvMaisons = { ...pvMaisons };
    newPvMaisons[type] -= 1;
    setPvMaisons(newPvMaisons);

    if (newPvMaisons[type] < 1) {
      console.log(checkLoupGagne(newPvMaisons));
    }
  }

  function checkLoupGagne(newPvMaisons) {
    for (let type in newPvMaisons) {
      if (newPvMaisons[type] > 0) {
        return false;
      }
    }
    setFinPartie(true);
    return true;
  }
  if (finPartie) {
    return <p>Le loup a gagné !</p>;
  }

  return (
    <div className="village">
      <Maison
        type="paille"
        nbPv={pvMaisons["paille"]}
        onSouffler={handleSouffler}
      />
      <Maison
        type="bois"
        nbPv={pvMaisons["bois"]}
        onSouffler={handleSouffler}
      />
      <Maison
        type="briques"
        nbPv={pvMaisons["briques"]}
        onSouffler={handleSouffler}
      />
    </div>
  );
}
