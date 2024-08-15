import { auth } from '@/auth';
import Image from 'next/image';

const ProfileInfo = async () => {
  const session = await auth();
  console.log(session, 'auth');
  return (
    <section className="mt-[100px]">
      <div className="container">
        {/* <!-- profile info --> */}
        <div className="flex flex-col items-center py-8 text-center">
          {/* <!-- profile image --> */}
          <div className="relative max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px] grid place-items-center text-4xl text-white">
            {session?.user?.image ? (
              <Image
                width={90}
                height={32}
                src={session?.user?.image}
                className="rounded-full"
                alt={session?.user?.name}
              />
            ) : (
              <div className="max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px] grid place-items-center text-4xl bg-gray-700 text-white">
                {session?.user?.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          {/* <!-- name , email --> */}
          <div>
            <h3 className="text-2xl bg-bl font-semibold lg:text-[28px]">
              {session?.user?.name}
            </h3>
            <p className="leading-[231%] lg:text-lg">{session?.user?.email}</p>
          </div>

          <div className="w-3/4 border-b border-[#a4a4a4] py-6 lg:py-4"></div>
        </div>
        {/* <!-- end profile info --> */}
      </div>
    </section>
  );
};

export default ProfileInfo;
