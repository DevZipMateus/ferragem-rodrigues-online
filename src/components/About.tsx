import { Target, Eye, Heart, Award, Clock, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Honestidade',
      description: 'Transparência em cada venda e orientação.',
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Produtos selecionados para garantir durabilidade e segurança.',
    },
    {
      icon: Users,
      title: 'Atendimento humanizado',
      description: 'Respeito, atenção e escuta ao cliente.',
    },
    {
      icon: Clock,
      title: 'Tradição e confiança',
      description: 'Uma história construída com trabalho e credibilidade.',
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Quem somos
          </span>
          <h2 className="heading-secondary text-foreground mt-2 mb-4">
            Sobre a Ferragem Rodrigues
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Há mais de 20 anos oferecendo as melhores soluções em ferragens e materiais
            para construção na região de Gravataí.
          </p>
        </div>

        {/* History */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="heading-tertiary text-foreground mb-4">Nossa história</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Surgimos em 1º de setembro de 2003, com a necessidade da comunidade local
              por uma loja no ramo de ferragem que os atendesse com todo o material e
              assistência.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Com o objetivo de crescer e se desenvolver junto com a comunidade, prestando
              o melhor atendimento possível. Hoje somos referência em qualidade e
              variedade de produtos na região.
            </p>
          </div>
          <div className="bg-secondary rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <span className="text-4xl font-heading font-bold text-primary">+20</span>
                <p className="text-muted-foreground mt-2">Anos de experiência</p>
              </div>
              <div className="text-center p-4">
                <span className="text-4xl font-heading font-bold text-primary">1000+</span>
                <p className="text-muted-foreground mt-2">Clientes atendidos</p>
              </div>
              <div className="text-center p-4">
                <span className="text-4xl font-heading font-bold text-primary">5000+</span>
                <p className="text-muted-foreground mt-2">Produtos em estoque</p>
              </div>
              <div className="text-center p-4">
                <span className="text-4xl font-heading font-bold text-primary">100%</span>
                <p className="text-muted-foreground mt-2">Compromisso</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card-elevated p-8 border-l-4 border-l-primary">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-tertiary text-foreground">Missão</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Nossa missão é oferecer produtos e serviços de ferragem com qualidade,
              agilidade e atendimento especializado, garantindo a confiança de clientes,
              parceiros e profissionais que dependem da excelência para executar seus
              projetos.
            </p>
          </div>

          <div className="card-elevated p-8 border-l-4 border-l-accent">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="heading-tertiary text-foreground">Visão</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Buscamos consolidar a Ferragem Rodrigues como uma das principais referências
              da região, reconhecida pela inovação no atendimento, pela ampla oferta de
              produtos e pelo compromisso com a satisfação total dos clientes.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="heading-tertiary text-foreground text-center mb-10">
            Nossos valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
