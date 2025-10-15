import countryFacts from '../api/countryData.json'

export const About = () => {
  return (
    <div className="max-w-[68rem] mx-auto my-32 px-4 md:px-8 ">
      {/* Heading */}
      <h1 className="text-center text-3xl sm:text-4xl font-bold font-serif">
        Famous Countries and Interesting Facts
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 my-16 place-items-center">
        {countryFacts.map((curCountry) => {
          const { id, country, capital, population, fact } = curCountry;
          return (
            <div
              key={id} className="w-[22rem] md:w-[21.1rem] h-auto min-h-[13rem] relative rounded-3xl shadow-2xl shadow-stone-800/70 hover:scale-105 transition-transform" >

              {/* Card Content */}
              <div className="text-white absolute inset-0 px-6 py-5 z-[1] opacity-95 rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-950">
                <h2 className="font-bold font-serif text-xl mb-2">{country}</h2>
                <p className="text-sm mb-1">
                  <span className="font-bold pr-1">Capital:</span> {capital}
                </p>
                <p className="text-sm  mb-1">
                  <span className="font-bold pr-1">Population:</span> {population}
                </p>
                <p className="text-sm">
                  <span className="font-bold pr-1">Fact:</span> {fact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
