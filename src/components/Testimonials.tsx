import { Star, ExternalLink } from 'lucide-react';
import customerService from '@/assets/customer-service.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos S.',
      role: 'Eletricista',
      content:
        'Sempre encontro tudo que preciso para meus serviços. Atendimento excelente e preços justos. Recomendo!',
      rating: 5,
    },
    {
      name: 'Maria L.',
      role: 'Cliente',
      content:
        'Loja muito organizada e funcionários atenciosos. Me ajudaram a escolher os materiais certos para minha reforma.',
      rating: 5,
    },
    {
      name: 'José R.',
      role: 'Pedreiro',
      content:
        'Trabalho com construção há 15 anos e a Ferragem Rodrigues é minha parceira de confiança. Qualidade garantida.',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-section">
        {/* Section Header with Image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-12 lg:mb-16">
          <div className="order-2 lg:order-1">
            <span className="text-accent-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider bg-accent px-3 sm:px-4 py-1 rounded-full">
              Depoimentos
            </span>
            <h2 className="heading-secondary text-foreground mt-3 sm:mt-4 mb-3 sm:mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              A satisfação dos nossos clientes é nossa maior recompensa. Veja o que eles
              têm a dizer sobre nossa loja. Nosso compromisso é oferecer o melhor atendimento
              e produtos de qualidade.
            </p>
          </div>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
            <img
              src={customerService}
              alt="Atendimento ao cliente na Ferragem Rodrigues"
              className="w-full h-48 sm:h-60 lg:h-72 object-cover"
            />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg border border-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-base sm:text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-3 sm:mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-foreground font-medium text-sm sm:text-base">
              Avaliação no Google
            </span>
          </div>
          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base px-4">
            Confira todas as avaliações dos nossos clientes no Google Maps
          </p>
          <a
            href="https://goo.gl/maps/HEtLMUY2o44qcQXA8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Ver avaliações no Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
