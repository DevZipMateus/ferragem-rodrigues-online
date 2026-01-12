import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-section py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo & About */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-accent-foreground text-lg sm:text-xl">
                  FR
                </span>
              </div>
              <span className="font-heading font-bold text-base sm:text-lg lg:text-xl">Ferragem Rodrigues</span>
            </div>
            <p className="text-primary-foreground/80 mb-3 sm:mb-4 max-w-md text-sm sm:text-base">
              Onde o profissional encontra o material certo. Há mais de 20 anos
              oferecendo qualidade, variedade e atendimento especializado em Gravataí.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/ferragem.rodrigues.3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.facebook.com/ferragem.rodrigues.3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-3 sm:mb-4">Links rápidos</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Produtos', href: '#produtos' },
                { label: 'Depoimentos', href: '#depoimentos' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contato</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="tel:5134315778"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm sm:text-base"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>(51) 3431-5778</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5551992683363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm sm:text-base"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>(51) 99268-3363</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ferra.rodrigues@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm sm:text-base break-all"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="truncate">ferra.rodrigues@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80 text-sm sm:text-base">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Rua Luciana de Abreu, 590
                  <br />
                  COHAB B, Gravataí - RS
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-primary-foreground/70 text-center md:text-left">
            <p>
              © {currentYear} Ferragem Rodrigues Ltda. CNPJ: 05.832.745/0001-30. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
