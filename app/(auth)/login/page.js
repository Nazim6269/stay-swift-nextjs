import Login from '@/components/auth/Login';
import SocialLogins from '@/components/auth/SocialLogins';
import Image from 'next/image';
import React from 'react';

const LoginPage = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Login in</h4>
        <Login />

        <div className="text-center text-xs text-gray-500">or Signup with</div>
        <SocialLogins />
      </div>
    </section>
  );
};

export default LoginPage;
