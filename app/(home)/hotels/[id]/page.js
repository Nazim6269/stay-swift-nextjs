import Gallery from '@/components/details/Gallery';
import Overview from '@/components/details/Overview';
import Summary from '@/components/details/Summary';
import { getSingleItemById } from '@/db/queries/hotelsQuery/hotelQuery';

const HotelDetailsPage = async ({ params: { id } }) => {
  const singleHotel = await getSingleItemById(id);

  return (
    <>
      <Summary hotelInfo={singleHotel} />
      <Gallery gallery={singleHotel?.gallery} />
      <Overview overview={singleHotel?.overview} />
    </>
  );
};

export default HotelDetailsPage;
