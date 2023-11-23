import { SelectedGameReview } from "../SelectedGame/SelectedGameReview";

export const SelectedGameReviews = () => {
    return (
        <div className="review-position">
            <h1 className="">Testimonials</h1>
            <SelectedGameReview title='Shrimp and Chorizo Paella' date='13 June 2023' description='A captivating experience that seamlessly blends immersive storytelling with innovative gameplay mechanics, keeping players hooked from start to finish.'/>
            <SelectedGameReview title='inceptionhotdogflora' date='05 October 2023' description='An enthralling adventure that expertly balances challenge and reward, inviting players into a world brimming with endless possibilities and thrilling surprises.'/>
            <SelectedGameReview title='IghBRoS' date='27 August 2023' description='A visually stunning masterpiece with a rich, expansive world to explore, offering an addictive mix of exploration, strategy, and heart-pounding action.'/>
        </div>
    );
};