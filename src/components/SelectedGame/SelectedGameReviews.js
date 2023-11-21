import { SelectedGameReview } from "../SelectedGame/SelectedGameReview";

export const SelectedGameReviews = () => {
    return (
        <div className="review-position">
            <h1 className="">Testimonials</h1>
            <SelectedGameReview title='Shrimp and Chorizo Paella' date='13 June 2023'/>
            <SelectedGameReview title='inceptionhotdogflora' date='05 October 2023'/>
            <SelectedGameReview title='IghBRoS' date='27 August 2023'/>
        </div>
    );
};