import { NavLink } from "react-router-dom";
export const CountryCard = ({ country }) => {
    const { name, capital, population, flags, region } = country;
    return (
        <li className='w-[21rem]  place-items-center sm:w-[18rem] md:w-[16rem] min-h-[25rem] relative rounded-3xl shadow-2xl shadow-stone-800/70 bg-gradient-to-r  over:scale-105  to-zinc-950 from-zinc-900 hover:scale-105 transition-transform duration-300'>
            <div className="text-white ">
                <img src={flags.svg} className="w-[85%] place-self-center h-28 my-5 0 object-contain mt-5" alt={flags.alt} />

                <div className="mx-5  w-full px-3 py-3">
                   
                    <p className="p-0.5 pb-3 text-xl font-bold">{name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}</p>
                    <p className="text-[1rem] mt-1"><span className="text-neutral-400">Capital : </span>{capital[0]}</p>
                    <p className="text-[1rem] mt-1"><span className="text-neutral-400">Population : </span>{population}</p>
                    <p className="text-[1rem] mt-1"><span className="text-neutral-400">Region : </span>{region}</p>

                    <div className="mt-6">
                        <NavLink to={`/country/${name.common}`}>
                            <button className=" border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 px-5 py-1 rounded-2xl transition">Read More</button>
                        </NavLink>
                    </div>
                </div>

            </div>
        </li>

    )
}

