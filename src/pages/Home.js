import { FeaturedCard } from "../components/FeaturedCard/FeaturedCard";
// import { FooterCard } from "../components/FooterCard/FooterCard";
import { IntroCard } from "../components/IntroCard/IntroCard";
import { SlideshowCard } from "../components/SlideshowCard/SlideshowCard";

export const Home = ({ handleSetDeal }) => {
  return (
    <div>
      <IntroCard />
      <FeaturedCard handleSetDeal={handleSetDeal} />
      <SlideshowCard/>
      {/* <FooterCard/> */}
    </div>
  );
};
