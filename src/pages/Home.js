import { FeaturedCard } from "../components/FeaturedCard/FeaturedCard";
import { IntroCard } from "../components/IntroCard/IntroCard";

export const Home = ({ handleSetDeal }) => {
  return (
    <div>
      <IntroCard />
      <FeaturedCard handleSetDeal={handleSetDeal} />
    </div>
  );
};
