import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
    return (
        <main className="px-4 md:px-8 lg:px-16">
            <div className="max-w-[68rem]  mx-auto my-24 md:my-32  gap-12 md:gap-20 grid grid-cols-1 md:grid-cols-2 items-center">

                {/* Left Section */}
                <div className="w-full p-3 text-center md:text-left order-2 md:order-1">
                    <h1 className=" text-3xl sm:text-4xl lg:text-5xl font-thin leading-snug">
                        Explore the World, One Country at a Time.
                    </h1>
                    <p className="text-white text-base sm:text-lg my-5 max-w-[35rem] mx-auto md:mx-0">
                        Discover the history, culture, and beauty of every nation. Sort, search,
                        and filter through countries to find the details you need.
                    </p>

                    <NavLink to="/country">
                        <button className="border border-white px-4 py-2 mt-6 rounded-2xl w-fit bg-neutral-800 flex items-center gap-2 mx-auto md:mx-0 hover:bg-neutral-700 transition">
                            Start Exploring <FaLongArrowAltRight />
                        </button>
                    </NavLink>
                </div>

                {/* Right Section */}
                <div className="flex justify-center order-1 md:order-2">
                    <img
                        src="https://thumbs.dreamstime.com/b/collage-iconic-landmarks-around-world-including-eiffel-tower-statue-liberty-taj-mahal-pyramids-giza-338255936.jpg"
                        alt="World Landmarks" className="w-[85%] sm:w-[70%] md:w-full rounded-xl shadow-lg" />
                </div>
            </div>
        </main>
    );
};
