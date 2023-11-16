import { SelectedGameReview } from "../components/SelectedGameReview";

export const SelectedGameReviews = () => {
    return (
        <div className="review-position">
            <SelectedGameReview title='Shrimp and Chorizo Paella' date='13 June 2023'/>
            <SelectedGameReview title='inceptionhotdogflora' date='05 October 2023'/>
            <SelectedGameReview title='IghBRoS' date='27 August 2023'/>
        </div>
    );
};