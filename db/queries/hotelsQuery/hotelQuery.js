import { hotelModel } from '@/models/hotelsModels';
import { removeMongoId } from '@/utils/remove';

const getAllHotels = async () => {
  const hotels = await hotelModel
    .find()
    .select(['highRate', 'lowRate', 'city', 'thumbnailUrl', 'propertyCategory'])
    .lean();

  return removeMongoId(hotels);
};

export { getAllHotels };
