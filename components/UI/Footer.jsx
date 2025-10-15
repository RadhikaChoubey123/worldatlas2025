import footerContact from "../../api/footerApi.json";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const Footer = () => {
    const footerIcons = {
        FaLocationDot: <FaLocationDot />,
        IoCallSharp: <IoCallSharp />,
        IoMdMail: <IoMdMail />,
    };

    return (
        <footer className="bg-neutral-900 text-white">
            {/* Top section */}
            <div className="grid grid-cols-1 gap-12  sm:grid-cols-2 md:grid-cols-3 lg:gap-60 px-6 py-8 place-items-center max-w-[68rem] md:px-3 mx-auto">
                {footerContact.map((curElem, index) => {
                    const { icon, title, details } = curElem;
                    return (
                        <div key={index} className="flex items-start place-self-start sm:items-center gap-4 text-left sm:text-left">
                            <div className="text-blue-700 text-3xl">{footerIcons[icon]}</div>
                            <div>
                                <p className="text-base font-bold">{title}</p>
                                <p className="text-neutral-400 text-sm">{details}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom section */}
            <div className="border-t border-neutral-700 bg-stone-950 ">
                <div className="flex flex-col md:flex-row justify-between  max-w-[68rem]  mx-auto items-center gap-4 px-6 md:px-2 py-4">
                    <p className="text-neutral-500 text-sm">
                        © {new Date().getFullYear()} All Rights Reserved
                    </p>
                    <div className="flex gap-6 text-sm">
                        <NavLink to="/" className="text-neutral-400 hover:text-white">
                            Home
                        </NavLink>
                        <NavLink to="/contact" className="text-neutral-400 hover:text-white">
                            Contact
                        </NavLink>
                        <NavLink to="#" className="text-neutral-400 hover:text-white">
                            Social
                        </NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};
