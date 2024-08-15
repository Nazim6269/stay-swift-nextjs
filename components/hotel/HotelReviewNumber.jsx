import { getReviewsHotels } from '@/db/queries/reviewQuery/query';
import Link from 'next/link';

//TODO: go tod hotel reviews page and show the all reviews

const HotelReviewNumber = async ({ id }) => {
  const reviews = await getReviewsHotels(id);

  return (
    <>
      {reviews?.length === 0 ? (
        <Link href="#" className="underline">
          Be the first one to review
        </Link>
      ) : (
        <Link href={`/hotel/${id}/reviews`} className="underline">
          {reviews.length} Reviews
        </Link>
      )}
    </>
  );
};

export default HotelReviewNumber;
