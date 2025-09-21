import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";
const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Close menu when clicking outside or on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navigationLinks = [
    { name: "Homepage", href: "/", active: true },
    { name: "Our Programs", href: "/" },
    { name: "Our Team", href: "/" },
    { name: "Contact Us", href: "/contactus" },
  ];
  return (
    < div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-800/50`}>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end md:justify-center py-4 ">
            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200  ${
                      link.active
                        ? "text-amber-500"
                        : "text-white hover:text-amber-500"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}

                {/* Donate Button */}
                <a
                  href="/"
                  className="ml-4 bg-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-600 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Donate
                </a>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-primary p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 text-gray-500 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-b">Menu</h2>
          <button
            onClick={closeMenu}
            className="text-text hover:text-primary p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <div className="px-6 py-8">
          <nav className="space-y-2">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                  link.active
                    ? 'text-primary bg-primary/10 bg-gray-50'
                    : 'text-text hover:text-primary hover:bg-gray-50 hover:translate-x-2'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Donate Button */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <a
              href="/"
              onClick={closeMenu}
              className="ml-4 bg-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-600 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
