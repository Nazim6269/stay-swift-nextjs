import { ratingsModel } from '@/models/ratingsModels';
import { removeMongoId } from '@/utils/remove';

export const getRatingsHotel = async (hotelId) => {
  const ratings = await ratingsModel.find({ hotelId: hotelId }).lean();
  console.log(ratings, 'query');
  const removedId = removeMongoId(ratings);
  console.log(removedId, 'query');
  return removedId;
};
