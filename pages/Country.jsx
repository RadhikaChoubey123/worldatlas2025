import { getCountryData } from "../api/postApi"
import { useEffect, useState } from "react"
import { useTransition } from "react";
import { CountryCard } from "../components/layout/countryCard";
import { Loading } from "./loading";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);

    })
  }, []);

  // loading
  if (isPending) return (
    <Loading />
  )

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  }

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  }

  // here is the main logic 
  const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));


  return (
    <section className="max-w-[68rem] mx-auto my-28">

      {/* seach bar */}
      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12 my-16 place-items-center">
        {
          filterCountries.map((curCountry, index) => {
            return <CountryCard country={curCountry} key={index} />
          })
        }
      </ul>

    </section>
  )
}