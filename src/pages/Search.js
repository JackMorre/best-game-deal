import { GameCard } from "../components/GameCard/GameCard";
import { SearchBar } from "../components/SearchBar/SearchBar";

export const Search = ({ searchData, handleUrlChange, handleSetDeal }) => {
  return (
    <section className="search">
      <SearchBar handleUrlChange={handleUrlChange} />
      {!searchData ? (
        <h2>No Searches Yet 😜</h2>
      ) : (
        <div>
          {searchData.length > 0 ? (
            <>
              <h2>Search </h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  display: "flex",
                  gap: "1rem",
                  flexDirection: "column",
                }}
              >
                {searchData.map((game) => {
                  return (
                    <GameCard
                      key={game.gameID}
                      title={game.external}
                      image={game.thumb}
                      price={game.cheapest}
                      dealID={game.cheapestDealID}
                      handleSetDeal={handleSetDeal}
                      gameID={game.gameID}
                    />
                  );
                })}
              </ul>
            </>
          ) : (
            <h2>We're sorry but we couldn't find anything.</h2>
          )}
        </div>
      )}
    </section>
  );
};
