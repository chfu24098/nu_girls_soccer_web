import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const emblem = "/images/emblem/日大/背景なしN.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "TEAM", href: "/team" },
    { name: "MEMBER", href: "/members" },
    { name: "MATCH SCHEDULE", href: "/schedule" },
    { name: "RESULT", href: "/results" },
    { name: "NEWS", href: "/news" },
    { name: "ACCESS", href: "/access" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b border-white/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img src={emblem} alt="Nihon University Emblem" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-white text-lg leading-tight">NU GIRLS SOCCER</h1>
              <p className="text-white/90 text-sm leading-tight">Nihon University</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`transition-colors ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 pb-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`block py-2 transition-colors ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}