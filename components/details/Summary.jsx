import React from 'react';
import HotelSummary from '../hotel/HotelSummary';

const Summary = ({ hotelInfo }) => {
  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummary source="details" info={hotelInfo} />
      </div>
    </section>
  );
};

export default Summary;
