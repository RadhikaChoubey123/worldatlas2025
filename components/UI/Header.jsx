import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-16 bg-zinc-800 text-white w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-[68rem] mx-auto px-4 flex justify-between items-center  h-16">

        {/* Logo */}
        <NavLink to="/" className="font-bold text-3xl">
          WorldAtlas
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex">
          <ul className="flex gap-6 text-[1.2rem]">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/country">Country</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-2xl" ><GiHamburgerMenu /></button>
      </div>

      {/* Mobile Nav */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden opacity-95 rounded-3xl inset-0.5 bg-gradient-to-r to-zinc-950 from-zinc-900 shadow-2xl shadow-stone-800/70 w-36  place-self-end`}>
        <ul className="flex flex-col gap-4 py-8 text-[1.06rem] px-10">
          <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
          <li><NavLink to="/country" onClick={() => setIsOpen(false)}>Country</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
        </ul>
      </div>
    </header>
  );
};
