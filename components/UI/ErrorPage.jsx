import { useRouteError, NavLink } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);


    return (
        <div className="text-white h-svh w-auto place-content-center place-items-center ">
            <h1 className="text-3xl font-bold p-1">Oops! An error occurred</h1>
            {error && <p>{error.data}</p>}
            <NavLink to="/"><button className="border-[1px] border-white p-2 mt-8 rounded-2xl w-[11rem] h-12 bg-neutral-800">Go Back</button></NavLink>
        </div>
    )

}