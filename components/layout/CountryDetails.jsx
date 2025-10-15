// import { getCountryIndData } from "../../api/postApi";
// import { useParams } from "react-router-dom"
// import { useEffect, useState } from "react";
// import { useTransition } from "react";
// import { Loading } from "../../pages/loading";
// import { NavLink } from "react-router-dom";

// export const CountryDetails = () => {
//     const param = useParams();
//     console.log(param);

//     const [isPending, startTransition] = useTransition();
//     const [country, setCountry] = useState();

//     useEffect(() => {
//         startTransition(async () => {
//             const res = await getCountryIndData(param.id);
//             console.log(res);

//             if (res.status === 200) {
//                 setCountry(res.data[0]);

//             }

//         })
//     }, []);

//     if (isPending) return (
//         <Loading />
//     )
//     return (
//         <div className='border-[0.0001rem] border-neutral-800 w-[99%] h-[30rem]  max-w-[80rem] mx-auto my-20 relative rounded-3xl shadow-2xl shadow-stone-800/70 bg-gradient-to-r to-zinc-950  from-zinc-900  '>
//             <div className="text-white w-[80%] h-[30rem]  mx-auto  py-8">
//                 {
//                     country && (

//                         <div className="grid grid-cols-2  h-[26rem] gap-32 ">
//                             <img src={country.flags.svg} alt={country.flags.alt} className="w-[20rem] h-48 mt-24" />
//                             <div className="mt-1">
//                                 <p className="text-3xl font-bold pb-5 ">{country.name.official}</p>
//                                 <div className="mt-2 ">
//                                     <p className="pb-4"><span className="text-neutral-400">Native Names : </span>{
//                                         Object.keys(country.name.nativeName).map((key) => country.name.nativeName[key].common).join(", ")
//                                     }</p>
//                                     <p className="pb-4 text-[1rem]"><span className="text-neutral-400">Capital : </span>{country.capital[0]}</p>
//                                     <p className="pb-4 text-[1rem]"><span className="text-neutral-400">Population : </span>{country.population}</p>
//                                     <p className="pb-4 text-[1rem]"><span className="text-neutral-400">Region : </span>{country.region}</p>
//                                     <p className="pb-4 text-[1rem]"><span className="text-neutral-400">Sub Region : </span>{country.subregion}</p>
//                                     <p className="pb-4 text-[1rem]"><span className="text-neutral-400">Top Level Domain : </span>{country.tld[0]}</p>

//                                     <p className="pb-4 text-[1rem]"><span className="text-neutral-400">Currencies : </span>
//                                         {Object.keys(country.currencies).map((curElm) => country.currencies[curElm].name).join(", ")}</p>

//                                     <p className="pb-2 text-[1rem]"><span className="text-neutral-400">Languages : </span>
//                                         {Object.keys(country.languages).map((curElm) => country.languages[curElm]).join(", ")}</p>


//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                 <div className=" border-[0.1rem] rounded-xl border-neutral-800 bg-neutral-900 text-center  p-1 -mt-14  -mr-6 place-self-end w-32 h-10">
//                     <NavLink to="/country">
//                         <button>Go Back</button>
//                     </NavLink>
//                 </div>
//             </div>
//         </div>


//     )

// }

import { getCountryIndData } from "../../api/postApi";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState, useTransition } from "react";
import { Loading } from "../../pages/loading";

export const CountryDetails = () => {
    const param = useParams();
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState();

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryIndData(param.id);
            if (res.status === 200) {
                setCountry(res.data[0]);
            }
        });
    }, []);

    if (isPending) return <Loading />;

    return (
        <div className="border border-neutral-800 w-[95%] md:w-[99%] h-auto max-w-[80rem] mx-auto my-28 rounded-3xl shadow-2xl shadow-stone-800/70 bg-gradient-to-r from-zinc-900 to-zinc-950">
            <div className="text-white w-[90%] mx-auto py-8">
                {country && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 items-center">
                        {/* Flag */}
                        <img
                            src={country.flags.svg}
                            alt={country.flags.alt}
                            className="w-full max-w-[20rem] h-48 object-contain mx-auto" />

                        {/* Text Info */}
                        <div className="lg:place-items-start place-self-center">
                            <p className="text-2xl md:text-3xl font-bold pb-5 ">{country.name.official}</p>
                            <div className="space-y-3 text-sm md:text-base">
                                <p><span className="text-neutral-400">Native Names: </span>
                                    {Object.keys(country.name.nativeName)
                                        .map((key) => country.name.nativeName[key].common)
                                        .join(", ")}
                                </p>
                                <p><span className="text-neutral-400">Capital: </span>{country.capital[0]}</p>
                                <p><span className="text-neutral-400">Population: </span>{country.population}</p>
                                <p><span className="text-neutral-400">Region: </span>{country.region}</p>
                                <p><span className="text-neutral-400">Sub Region: </span>{country.subregion}</p>
                                <p><span className="text-neutral-400">Top Level Domain: </span>{country.tld[0]}</p>
                                <p><span className="text-neutral-400">Currencies: </span>
                                    {Object.keys(country.currencies)
                                        .map((curElm) => country.currencies[curElm].name)
                                        .join(", ")}
                                </p>
                                <p><span className="text-neutral-400">Languages: </span>
                                    {Object.keys(country.languages).map((curElm) => country.languages[curElm]).join(", ")}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Go Back Button */}
                <div className="flex justify-end mt-8">
                    <NavLink to="/country">
                        <button className="border border-neutral-800 rounded-xl bg-neutral-900 px-4 py-2 hover:bg-neutral-800 transition">
                            Go Back
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
