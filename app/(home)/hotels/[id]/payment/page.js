import { auth } from '@/auth';
import Payment from '@/components/payment/Payment';
import { redirect } from 'next/navigation';

const PaymentPage = async ({ searchParams }) => {
  const session = await auth();
  //console.log(searchParams, 'searchParams'); //it is found empty???
  const { checkin, checkout } = searchParams;

  if (!session) redirect('/login');
  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <Payment checkin={checkin} checkout={checkout} />
        <p className="text-gray-600 text-sm">
          You have picked <b>Effotel By Sayaji Jaipur</b> and base price is{' '}
          <b>$10</b>
        </p>
      </div>
    </section>
  );
};

export default PaymentPage;
