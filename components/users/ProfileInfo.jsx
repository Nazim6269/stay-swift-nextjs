import React from 'react';

const ProfileInfo = () => {
  return (
    <section className="mt-[100px]">
      <div className="container">
        {/* <!-- profile info --> */}
        <div className="flex flex-col items-center py-8 text-center">
          {/* <!-- profile image --> */}
          <div className="relative max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px] bg-orange-600 grid place-items-center text-4xl text-white">
            N
          </div>
          {/* <!-- name , email --> */}
          <div>
            <h3 className="text-2xl font-semibold lg:text-[28px]">
              nazimuddin
            </h3>
            <p className="leading-[231%] lg:text-lg">nazim@gmail.com</p>
          </div>

          <div className="w-3/4 border-b border-[#a4a4a4] py-6 lg:py-4"></div>
        </div>
        {/* <!-- end profile info --> */}
      </div>
    </section>
  );
};

export default ProfileInfo;
