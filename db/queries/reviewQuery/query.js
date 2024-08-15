import { reviewModel } from '@/models/reviewsModels';
import { removeMongoId } from '@/utils/remove';

export const getReviewsHotels = async (hotelId) => {
  const reviews = await reviewModel.find({ hotelId: hotelId }).lean();

  return removeMongoId(reviews);
};
