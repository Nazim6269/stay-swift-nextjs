import { getAllHotels } from '@/db/queries/hotelsQuery/hotelQuery';
import Card from './Card';

const List = async () => {
  const data = await getAllHotels();
  console.log(data);
  return (
    <>
      <div className="col-span-9">
        <div className="space-y-4">
          <Card />
        </div>
      </div>
    </>
  );
};

export default List;
