import { GameCard } from "../components/GameCard/GameCard";
import { useApp } from "../context/AppProvider";

const dataForSearch = null;

export const Watchlist = () => {
  const { watchlist } = useApp();

  return (
    <section className="watchlist">
      {!dataForSearch ? (
        <h2>Nothing on your wishlist yet 😜</h2>
      ) : (
        <div>
          <h2 style={{ color: "black" }}>Wishlist</h2>
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
            }}
          >
            {watchlist.map((game) => {
              return (
                <GameCard
                  key={game.gameID}
                  title={game.external}
                  image={game.thumb}
                  price={game.cheapest}
                  dealID={game.cheapestDealID}
                  watchlist={true}
                />
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
};
