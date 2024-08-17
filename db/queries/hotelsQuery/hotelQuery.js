import { bookingModel } from '@/models/bookingsModels';
import { hotelModel } from '@/models/hotelsModels';
import { isDateInBetween } from '@/utils/date';
import { removeMongoId, removeObjId } from '@/utils/remove';

const getAllHotels = async (destination, checkin, checkout) => {
  const regex = new RegExp(destination, 'i');
  const hotelsByDestination = await hotelModel
    .find({ city: { $regex: regex } })
    .select([
      'thumbNailUrl',
      'name',
      'highRate',
      'lowRate',
      'city',
      'propertyCategory',
    ])
    .lean();

  let allHotels = hotelsByDestination;

  if (checkin && checkout) {
    allHotels = await Promise.all(
      allHotels.map(async (hotel) => {
        const found = await findBooking(hotel._id, checkin, checkout);

        if (found) {
          hotel['isBooked'] = true;
        } else {
          hotel['isBooked'] = false;
        }
        return hotel;
      }),
    );
  }

  return removeMongoId(allHotels);
};

const findBooking = async (hotelId, checkin, checkout) => {
  const matches = await bookingModel
    .find({ hotelId: hotelId.toString() })
    .lean();
  //console.log(matches, 'matches');
  const found = matches.find((match) => {
    const isCheckinInRange = isDateInBetween(
      checkin,
      match.checkIn,
      match.checkOut,
    );

    const isCheckoutInRange = isDateInBetween(
      checkout,
      match.checkIn,
      match.checkOut,
    );

    return isCheckinInRange || isCheckoutInRange;
  });

  return found;
};

const getSingleItemById = async (id) => {
  const hotel = await hotelModel.findById(id).lean();

  return removeObjId(hotel);
};

export { getAllHotels, getSingleItemById };
