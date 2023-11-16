import { FeaturedCard } from "../components/FeaturedCard/FeaturedCard";
import { IntroCard } from "../components/IntroCard/IntroCard";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <IntroCard/>
      <FeaturedCard/>
    </div>
  );
};
