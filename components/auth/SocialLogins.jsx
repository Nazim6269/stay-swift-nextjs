'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
//TODO: Facebook app secret creation problem

const SocialLogins = ({ mode }) => {
  const handleClick = (e, provider) => {
    signIn(provider, { callbackUrl: 'http://localhost:3000/bookings' });
    signIn(provider, { callbackUrl: 'http://localhost:3000/bookings' });
  };
  return (
    <>
      <div className="text-center text-xs text-gray-500">
        {mode === 'register' ? (
          <Link className="underline" href="/login">
            Login
          </Link>
        ) : (
          <Link className="underline" href="/register">
            Register
          </Link>
        )}{' '}
        or Signup with
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => handleClick('github')}
          className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
        >
          <Image src="/github.png" alt="" width={42} height={42} />
          <span>Github</span>
        </button>
        <button
          onClick={() => handleClick('google')}
          className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
        >
          <Image src="/google.png" alt="" width={42} height={42} />
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogins;
