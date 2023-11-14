import { GameCard } from "../components/GameCard/GameCard";

export const Search = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ color: "black" }}>Search</h2>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <GameCard />
      </ul>
    </div>
  );
};
