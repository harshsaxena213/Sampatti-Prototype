import { useState } from "react";
import { Menu, X, ChevronDown, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Calculators", href: "#calculators" },
    { name: "Education", href: "#education" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-emerald-600 text-white">
                <IndianRupee className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-gray-900">Sampatti</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <div className="relative group inline-block text-left">
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary">
                  <span>Resources</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Tax Guides
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Investment Resources
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Financial Planning Tips
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Retirement Calculators
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">Join Waitlist</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="relative px-3 py-2">
            <button className="flex w-full items-center justify-between text-base font-medium text-gray-700 hover:text-primary">
              <span>Resources</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200 pb-3 pt-4">
          <div className="space-y-2 px-4">
            <Button variant="outline" className="w-full justify-center" size="sm">
              Sign In
            </Button>
            <Button className="w-full justify-center" size="sm">
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}