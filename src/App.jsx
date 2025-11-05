import "./App.css";
import Maison from "./Maison";

export default function App() {
  return (
    <>
      <Maison type="paille" nbPvDefaut={1} />
      <Maison type="bois" nbPvDefaut={2} />
      <Maison type="briques" nbPvDefaut={3} />
    </>
  );
}
