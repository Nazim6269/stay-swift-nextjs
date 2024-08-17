'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

//TODO: when i refresh path goes to before place, but it should not

const FilterByCategories = () => {
  const searchParams = useParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();
  const pathName = usePathname();
  const [query, setQuery] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;

    if (e.target.checked) {
      setQuery((prev) => [...prev, name]);
    } else {
      const filteredQuery = query.filter((item) => item !== name);
      setQuery(filteredQuery);
    }
  };

  useEffect(() => {
    const category = params.get('category');
    if (category) {
      const decodedCategory = decodeURI(category);
      const queryInCategory = decodedCategory.split('|');

      setQuery(queryInCategory);
    }
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      params.set('category', encodeURI(query.join('|')));
    } else {
      params.delete('category');
    }
    replace(`${pathName}?${params.toString()}`);
  }, [query]);

  return (
    <div>
      <h3 className="font-bold text-lg">Star Category</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        <label htmlFor="fiveStar">
          <input
            type="checkbox"
            name="5"
            id="fiveStar"
            checked={query.includes('5')}
            onChange={handleChange}
          />
          5 Star
        </label>

        <label htmlFor="fourStar">
          <input
            type="checkbox"
            name="4"
            id="fourStar"
            checked={query.includes('4')}
            onChange={handleChange}
          />
          4 Star
        </label>

        <label htmlFor="threeStar">
          <input
            type="checkbox"
            name="3"
            id="threeStar"
            checked={query.includes('3')}
            onChange={handleChange}
          />
          3 Star
        </label>

        <label htmlFor="twoStar">
          <input
            type="checkbox"
            name="2"
            id="twoStar"
            checked={query.includes('2')}
            onChange={handleChange}
          />
          2 Star
        </label>

        <label htmlFor="oneStar">
          <input
            type="checkbox"
            name="1"
            id="oneStar"
            checked={query.includes('1')}
            onChange={handleChange}
          />
          1 Star
        </label>
      </form>
    </div>
  );
};

export default FilterByCategories;
