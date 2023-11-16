import { GameCard } from "../components/GameCard/GameCard";
import { SearchBar } from "../components/SearchBar/SearchBar";

import { dataForSearch } from "../local-json/searchData";

export const Watchlist = () => {
  return (
    <section className="watchlist">
      <SearchBar />
      {!dataForSearch ? (
        <h2 style={{ color: "black" }}>Nothing on your wishlist yet 😜</h2>
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
            {dataForSearch.map((game) => {
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
