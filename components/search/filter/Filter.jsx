import SortHotel from '../../sort/SortHotel';
import FilterByAmenities from './FilterByAmenities';
import FilterByCategories from './FilterByCategories';
import FilterByPrice from './FilterByPrice';

const Filter = () => {
  return (
    <div className="col-span-3 space-y-4">
      {/* <!-- Sort By Price --> */}
      <SortHotel />

      {/* <!-- Price Range --> */}
      <FilterByPrice />

      {/* <!-- Star Category --> */}
      <FilterByCategories />

      {/* <!-- Amenities --> */}
      <FilterByAmenities />
    </div>
  );
};

export default Filter;
