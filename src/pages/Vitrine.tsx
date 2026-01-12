import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const VitrineHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Vitrine', href: '/vitrine' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg h-20">
      <div className="container-section h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="font-heading font-bold text-accent-foreground text-xl">FR</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-primary-foreground text-lg">
                Ferragem Rodrigues
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
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
          <nav className="lg:hidden py-4 border-t border-primary-foreground/20 bg-primary absolute left-0 right-0 top-20 px-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-primary-foreground hover:text-accent transition-colors font-medium py-2"
                >
                  {item.label}
                </Link>
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

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      // 80px header + 63px badge = 143px
      const height = window.innerHeight - 80 - 63;
      setIframeHeight(height);
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);

    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header - 80px */}
      <VitrineHeader />

      {/* Spacer for fixed header */}
      <div className="h-20 flex-shrink-0" />

      {/* Iframe - dynamic height */}
      <div className="flex-1 w-full" style={{ height: `${iframeHeight}px` }}>
        <iframe
          src="https://ferragemrodrigues.egestor.com.br/vitrine/"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Vitrine de Produtos - Ferragem Rodrigues"
        />
      </div>

      {/* Badge inferior - 63px */}
      <div className="h-[63px] flex-shrink-0 w-full">
        <div id="montesite-footer-badge" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Vitrine;
