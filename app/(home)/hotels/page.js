import Search from '@/components/search/Search';
import List from '@/components/hotel/List';
import Filter from '@/components/search/Filter';

const HotelListPage = () => {
  return (
    <>
      <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
        <div className="container items-center py-12 ">
          <Search fromList={true} />
        </div>
      </section>
      <section className="py-12">
        <div className="container grid grid-cols-12">
          <Filter />
          <List />
        </div>
      </section>
    </>
  );
};

export default HotelListPage;
