import { getRatingsHotel } from '@/db/queries/ratingQuery/query';
import { findAvgRating, getRatingDescription } from '@/utils/rating';

const HotelRating = async ({ id }) => {
  const ratings = await getRatingsHotel(id);
  //console.log(ratings, 'hotelRating1');

  const avgRating = findAvgRating(ratings);
  console.log(avgRating, 'hotelRating');
  const desc = getRatingDescription(avgRating);

  return (
    <>
      <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
        {avgRating}
      </div>
      <span className="font-medium">{desc}</span>
    </>
  );
};

export default HotelRating;
