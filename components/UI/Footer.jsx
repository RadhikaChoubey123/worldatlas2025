import footerContact from "../../api/footerApi.json";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    const footerIcons = {
        FaLocationDot: <FaLocationDot />,
        IoCallSharp: <IoCallSharp />,
        IoMdMail: <IoMdMail />,
    };

    return (
        <footer className="bg-neutral-950 text-white">
            {/* Top */}
            <div className="max-w-[75rem] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Branding */}
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-blue-600">WorldAtlas</h2>
                    <p className="text-neutral-400 text-sm">
                        Explore information about countries around the world.
                    </p>

                    
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="flex flex-col gap-2 text-sm text-neutral-400">
                        <NavLink to="/" className="hover:text-white duration-200">Home</NavLink>
                        <NavLink to="/about" className="hover:text-white duration-200">About</NavLink>
                        <NavLink to="/country" className="hover:text-white duration-200">Country</NavLink>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
                    <ul className="space-y-2">
                        {footerContact.map(({ icon, title, details }, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm">
                                <span className="text-blue-600 text-lg">{footerIcons[icon]}</span>
                                <span className="text-neutral-400">{details}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-neutral-800">
                <div className="max-w-[75rem] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
                    <p>© {new Date().getFullYear()} WorldAtlas — All Rights Reserved</p>
                    {/* Social Icons */}
                    <div className="flex gap-4 text-2xl mt-4">
                        <a href="https://github.com/RadhikaChoubey123" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 duration-200">
                            <IoLogoGithub />
                        </a>
                        <a href="http://www.linkedin.com/in/radhika-choubey" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 duration-200">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
