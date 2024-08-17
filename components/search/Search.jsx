'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const Search = ({ fromList, destination, checkin, checkout }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState({
    destination: destination || 'Puglia',
    checkin: checkin,
    checkout: checkout,
  });
  const [allowSearch, setAllowSearch] = useState(true);

  const handleInputs = (e) => {
    const state = { ...searchTerm, [e.target.name]: e.target.value };

    if (
      new Date(state.checkin).getTime() > new Date(state.checkout).getTime()
    ) {
      setAllowSearch(false);
    } else {
      setAllowSearch(true);
    }
    setSearchTerm(state);
  };

  const handleClick = (e) => {
    const params = new URLSearchParams(searchParams);
    params.set('destination', searchTerm?.destination || 'all');

    if (searchTerm?.checkin && searchTerm?.checkout) {
      params.set('checkin', searchTerm?.checkin);
      params.set('checkout', searchTerm?.checkout);
    }

    if (pathName.includes('hotels')) {
      router.replace(`${pathName}?${params.toString()}`);
    } else {
      router.replace(`${pathName}hotels?${params.toString()}`);
    }
  };

  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div id="searchParams" className={fromList && '!shadow-none'}>
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select
                name="destination"
                id="destination"
                defaultValue={searchTerm.destination}
                onChange={handleInputs}
              >
                <option value="Puglia">Puglia</option>
                <option value="Catania">Catania</option>
                <option value="Palermo">Palermo</option>
                <option value="Frejus">Frejus</option>
                <option value="Paris">Paris</option>
              </select>
            </h4>
          </div>

          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input
                type="date"
                name="checkin"
                id="checkin"
                value={searchTerm.checkin}
                onChange={handleInputs}
              />
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input
                type="date"
                name="checkout"
                id="checkout"
                value={searchTerm.checkout}
                onChange={handleInputs}
              />
            </h4>
          </div>
        </div>
      </div>

      <button
        disabled={!allowSearch}
        className="search-btn"
        onClick={handleClick}
      >
        🔍️ {fromList ? 'Modify Search' : 'Search'}
      </button>
    </>
  );
};

export default Search;
