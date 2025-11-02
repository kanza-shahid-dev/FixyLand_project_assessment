import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

export const Header = () => {
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "Booking", link: "/booking" },
    { title: "About Us", link: "/" },
  ];
  return (
    <header className="bg-secondary text-white flex items-center justify-between px-6 py-3 shadow-md">
      <div className="flex items-center space-x-2">
        <span className="text-lg font-semibold">Fixyland</span>
      </div>

      <nav className="hidden md:flex space-x-6 text-sm">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.link} className="hover:text-yellow-400">
            {link.title}
          </Link>
        ))}
      </nav>

      <div className="space-x-3">
        <Link to="/booking" className="flex items-center gap-2">
          <Button
            variant="secondary"
            className="bg-[#e5c466] text-black hover:bg-[#e0b90d]"
          >
            Book Your Stay <ArrowUpRight size={16} />
          </Button>
        </Link>
      </div>
    </header>
  );
};
