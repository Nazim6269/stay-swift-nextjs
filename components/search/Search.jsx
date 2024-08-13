const Search = ({ fromList }) => {
  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div id="searchParams">
          {/* <!--Location  --> */}
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select name="destination" id="destination">
                <option value="Bali">Bali</option>
                <option value="Bali">Cox&aposs Bazar</option>
                <option value="Bali">Sylhet</option>
                <option value="Bali">Saint Martin</option>
                <option value="Bali">Bali</option>
              </select>
            </h4>
          </div>

          {/* <!-- Guests --> */}
          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input type="date" name="checkin" id="checkin" />
            </h4>
          </div>

          {/* <!-- Check in --> */}
          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input type="date" name="checkout" id="checkout" />
            </h4>
          </div>
        </div>
      </div>

      {/* <!-- Search Button --> */}
      <button className="search-btn">
        🔍️ {fromList ? 'Modify search' : 'Search'}
      </button>
    </>
  );
};

export default Search;
