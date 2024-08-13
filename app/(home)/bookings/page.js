import PastBooking from '@/components/users/bookings/PastBooking';
import UpcomingBooking from '@/components/users/bookings/UpcomingBooking';
import ProfileInfo from '@/components/users/ProfileInfo';

const BookingsPage = () => {
  return (
    <>
      <section className="mt-[100px]">
        <div className="container">
          <ProfileInfo />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PastBooking />
            <UpcomingBooking />
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingsPage;
