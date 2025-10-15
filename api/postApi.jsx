import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});

// get data

export const getCountryData = () => {
    return (
        api.get("/all?fields=name,capital,currencies,region,flags,population")
    )
}

export const getCountryIndData = (name) => {
    return (
        api.get(`/name/${name}?fullText=true&fields=name,capital,currencies,region,subregion,flags,population,tld,languages,borders`)
    )
}