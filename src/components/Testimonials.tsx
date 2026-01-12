import { Star, ExternalLink } from 'lucide-react';

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
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-foreground font-semibold text-sm uppercase tracking-wider bg-accent px-4 py-1 rounded-full">
            Depoimentos
          </span>
          <h2 className="heading-secondary text-foreground mt-4 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. Veja o que eles
            têm a dizer sobre nossa loja.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-secondary px-6 py-3 rounded-full mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-foreground font-medium">
              Avaliação no Google
            </span>
          </div>
          <p className="text-muted-foreground mb-6">
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
