import Signup from '@/components/auth/Signup';
import SocialLogins from '@/components/auth/SocialLogins';
import React from 'react';

const RegistrationPage = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign up</h4>
        <Signup />

        <div className="text-center text-xs text-gray-500">or Signup with</div>

        <SocialLogins />
      </div>
    </section>
  );
};

export default RegistrationPage;
