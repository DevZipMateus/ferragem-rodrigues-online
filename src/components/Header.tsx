import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio', isAnchor: true },
    { label: 'Sobre', href: '#sobre', isAnchor: true },
    { label: 'Produtos', href: '#produtos', isAnchor: true },
    { label: 'Vitrine', href: '/vitrine', isAnchor: false },
    { label: 'Depoimentos', href: '#depoimentos', isAnchor: true },
    { label: 'Contato', href: '#contato', isAnchor: true },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg' : 'bg-primary/95'
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:block bg-navy-dark">
        <div className="container-section py-2">
          <div className="flex justify-between items-center text-sm text-primary-foreground/80">
            <div className="flex items-center gap-6">
              <a
                href="tel:5134315778"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(51) 3431-5778</span>
              </a>
              <a
                href="mailto:ferra.rodrigues@gmail.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>ferra.rodrigues@gmail.com</span>
              </a>
            </div>
            <div className="text-primary-foreground/70">
              Seg-Sáb: 8h-12h | 13h30-18h
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container-section">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#inicio');
            }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="font-heading font-bold text-accent-foreground text-xl">FR</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-primary-foreground text-lg">
                Ferragem Rodrigues
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.isAnchor ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="nav-link"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/5551992683363"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Fale conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-primary-foreground hover:text-accent transition-colors"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.isAnchor ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-primary-foreground hover:text-accent transition-colors font-medium py-2"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-primary-foreground hover:text-accent transition-colors font-medium py-2"
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <a
                href="https://wa.me/5551992683363"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-center mt-2"
              >
                Fale conosco
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
