import Image from 'next/image';
import HotelSummary from './HotelSummary';

const HotelCard = ({ item, checkin, checkout }) => {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src={item?.thumbNailUrl}
        className="max-h-[162px] max-w-[240px]"
        alt={item?.name}
        width={240}
        height={165}
      />
      <HotelSummary
        fromListPage={true}
        info={item}
        checkin={checkin}
        checkout={checkout}
      />
    </div>
  );
};

export default HotelCard;
