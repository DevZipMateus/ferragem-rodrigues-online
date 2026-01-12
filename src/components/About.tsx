import { Target, Eye, Heart, Award, Clock, Users } from 'lucide-react';
import storeInterior from '@/assets/store-interior.jpg';

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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="heading-tertiary text-foreground mb-4">Nossa história</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
              Surgimos em 1º de setembro de 2003, com a necessidade da comunidade local
              por uma loja no ramo de ferragem que os atendesse com todo o material e
              assistência.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Com o objetivo de crescer e se desenvolver junto com a comunidade, prestando
              o melhor atendimento possível. Hoje somos referência em qualidade e
              variedade de produtos na região.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="bg-secondary rounded-xl p-3 sm:p-4 text-center">
                <span className="text-2xl sm:text-3xl font-heading font-bold text-primary">+20</span>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1">Anos de experiência</p>
              </div>
              <div className="bg-secondary rounded-xl p-3 sm:p-4 text-center">
                <span className="text-2xl sm:text-3xl font-heading font-bold text-primary">5000+</span>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1">Produtos em estoque</p>
              </div>
            </div>
          </div>
          
          {/* Store Image */}
          <div className="relative order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={storeInterior}
                alt="Interior da loja Ferragem Rodrigues com prateleiras organizadas de ferramentas, tintas e materiais"
                className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-accent text-accent-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg font-heading font-bold text-sm sm:text-base">
              Desde 2003
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="card-elevated p-5 sm:p-6 lg:p-8 border-l-4 border-l-primary">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="heading-tertiary text-foreground">Missão</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Nossa missão é oferecer produtos e serviços de ferragem com qualidade,
              agilidade e atendimento especializado, garantindo a confiança de clientes,
              parceiros e profissionais que dependem da excelência para executar seus
              projetos.
            </p>
          </div>

          <div className="card-elevated p-5 sm:p-6 lg:p-8 border-l-4 border-l-accent">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
              </div>
              <h3 className="heading-tertiary text-foreground">Visão</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Buscamos consolidar a Ferragem Rodrigues como uma das principais referências
              da região, reconhecida pela inovação no atendimento, pela ampla oferta de
              produtos e pelo compromisso com a satisfação total dos clientes.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="heading-tertiary text-foreground text-center mb-6 sm:mb-8 lg:mb-10">
            Nossos valores
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-10 h-10 sm:w-12 lg:w-14 sm:h-12 lg:h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <value.icon className="w-5 h-5 sm:w-6 lg:w-7 sm:h-6 lg:h-7 text-primary-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
