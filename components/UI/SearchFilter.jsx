export const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    };

    const handleSelectChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    };

    const sortCountries = (value) => {
        const sortCountry = [...countries].sort((a, b) => {
            return value === "asc"
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common);
        });
        setCountries(sortCountry);
    };

    return (
        <div className="flex flex-col  sm:flex-row sm:items-center sm:justify-between gap-6">

            {/* Search Box */}
            <div className="flex-1">
                <input
                    type="text"
                    value={search}
                    placeholder="Search"
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-neutral-600 bg-neutral-900 h-10 pl-3 text-base text-white focus:outline-none focus:ring-2 focus:ring-zinc-600 transition"
                />
            </div>

            {/* Asc Button */}
            <button
                onClick={() => sortCountries("asc")}
                className="bg-neutral-900 h-10 px-4 text-white border border-neutral-600 rounded-2xl hover:bg-neutral-800 transition">Asc</button>

            {/* Desc Button */}
            <button
                onClick={() => sortCountries("desc")}
                className="bg-neutral-900 h-10 px-4 text-white border border-neutral-600 rounded-2xl hover:bg-neutral-800 transition">Desc </button>

            {/* Filter Dropdown */}
            <div>
                <select
                    value={filter}
                    onChange={handleSelectChange}
                    className="bg-neutral-900 h-10 px-3 text-white border border-neutral-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-zinc-600 transition">
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctic">Antarctic</option>
                </select>
            </div>
        </div>
    );
};
