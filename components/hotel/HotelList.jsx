import { getAllHotels } from '@/db/queries/hotelsQuery/hotelQuery';
import HotelCard from './HotelCard';

const List = async ({ destination, checkin, checkout }) => {
  const data = await getAllHotels(destination, checkin, checkout);

  return (
    <>
      <div className="col-span-9">
        <div className="space-y-4">
          {data?.map((item) => (
            <HotelCard key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
