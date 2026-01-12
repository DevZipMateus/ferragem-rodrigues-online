import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefones',
      lines: ['(51) 3431-5778', '(51) 99268-3363'],
      href: 'tel:5134315778',
    },
    {
      icon: Mail,
      title: 'E-mail',
      lines: ['ferra.rodrigues@gmail.com'],
      href: 'mailto:ferra.rodrigues@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      lines: ['Rua Luciana de Abreu, 590', 'COHAB B, Gravataí - RS'],
      href: 'https://maps.app.goo.gl/xL833UeQKjLuoATK9',
    },
  ];

  return (
    <section id="contato" className="section-padding bg-secondary">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="text-accent-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider bg-accent px-3 sm:px-4 py-1 rounded-full">
            Contato
          </span>
          <h2 className="heading-secondary text-foreground mt-3 sm:mt-4 mb-3 sm:mb-4">
            Entre em contato conosco
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Estamos prontos para atender você. Visite nossa loja ou entre em contato
            pelos nossos canais de atendimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div>
            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-3 sm:gap-4 bg-card rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1 text-sm sm:text-base">
                      {info.title}
                    </h3>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-muted-foreground text-sm sm:text-base">
                        {line}
                      </p>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="bg-primary rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                <h3 className="font-heading font-semibold text-primary-foreground text-sm sm:text-base">
                  Horário de funcionamento
                </h3>
              </div>
              <div className="space-y-2 text-primary-foreground/90 text-sm sm:text-base">
                <p>
                  <strong>Segunda a sábado:</strong> 8h às 12h | 13h30 às 18h
                </p>
                <p>
                  <strong>Domingos e feriados:</strong> 8h às 12h
                </p>
                <p className="text-primary-foreground/70 text-xs sm:text-sm mt-3">
                  * Nos meses de janeiro e fevereiro não abrimos aos domingos.
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                Siga-nos nas redes sociais
              </h3>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://www.instagram.com/ferragem.rodrigues.3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                <a
                  href="https://www.facebook.com/ferragem.rodrigues.3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2!2d-51.05!3d-29.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU1JzQ4LjAiUyA1McKwMDMnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Ferragem Rodrigues"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <a
            href="https://wa.me/5551992683363"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent inline-flex items-center gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
