import { getAllHotels } from '@/db/queries/hotelsQuery/hotelQuery';
import HotelCard from './HotelCard';
import NoHotels from './NotHotels';

const List = async ({ destination, checkin, checkout, category }) => {
  const data = await getAllHotels(destination, checkin, checkout, category);

  return (
    <>
      <div className="col-span-9">
        <div className="space-y-4">
          {data?.length > 0 ? (
            data?.map((item) => (
              <HotelCard
                key={item?.id}
                item={item}
                checkin={checkin}
                checkout={checkout}
              />
            ))
          ) : (
            <NoHotels />
          )}
        </div>
      </div>
    </>
  );
};

export default List;
