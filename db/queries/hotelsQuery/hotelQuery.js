import { hotelModel } from '@/models/hotelsModels';
import { removeMongoId, removeObjId } from '@/utils/remove';

const getAllHotels = async () => {
  const hotels = await hotelModel
    .find()
    .select([
      'highRate',
      'name',
      'lowRate',
      'city',
      'thumbNailUrl',
      'propertyCategory',
    ])
    .lean();

  return removeMongoId(hotels);
};

const getSingleItemById = async (id) => {
  const hotel = await hotelModel.findById(id).lean();

  return removeObjId(hotel);
};

export { getAllHotels, getSingleItemById };
