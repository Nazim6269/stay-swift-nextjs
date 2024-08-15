import { ratingsModel } from '@/models/ratingsModels';
import { removeMongoId } from '@/utils/remove';

export const getRatingsHotel = async (hotelId) => {
  const ratings = await ratingsModel.find({ hotelId: hotelId }).lean();

  return removeMongoId(ratings);
};
