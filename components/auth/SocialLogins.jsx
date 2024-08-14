'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

const SocialLogins = () => {
  const handleClick = (e) => {
    signIn('google', { callbackUrl: 'http://localhost:3000/bookings' });
  };
  return (
    <div className="flex gap-4">
      <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
        <Image src="/fb.png" alt="" width={42} height={42} />
        <span>Facebook</span>
      </button>
      <button
        onClick={handleClick}
        className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
      >
        <Image src="/google.png" alt="" width={42} height={42} />
        <span>Google</span>
      </button>
    </div>
  );
};

export default SocialLogins;
