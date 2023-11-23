import { GameCard } from "../components/GameCard/GameCard";
import { useApp } from "../context/AppProvider";
import "./watchlist.css";

export const Watchlist = ({ handleSetDeal }) => {
  const { watchlist } = useApp();
  const test = () => {
    console.log(watchlist);
  };
  test();
  return (
    <section className="watchlist">
      {!watchlist || watchlist.length === 0 ? (
        <h2 style={{
          height: "50vh",}}>Nothing on your watchlist yet 😜</h2>
      ) : (
        <div>
          <h2>Wishlist</h2>
          <ul className="list-items-wl">
            {watchlist.map((game) => {
              return (
                <GameCard
                  key={game.gameID}
                  title={game.external}
                  image={game.thumb}
                  price={game.cheapest}
                  dealID={game.cheapestDealID}
                  watchlist={true}
                  gameID={game.gameID}
                  game={game}
                  handleSetDeal={handleSetDeal}
                />
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
};
