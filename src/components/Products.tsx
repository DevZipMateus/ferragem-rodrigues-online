import { Zap, Droplets, Wrench, Paintbrush, Hammer, Dog } from 'lucide-react';
import toolsDisplay from '@/assets/tools-display.jpg';
import paintSupplies from '@/assets/paint-supplies.jpg';
import electricalSupplies from '@/assets/electrical-supplies.jpg';
import plumbingSupplies from '@/assets/plumbing-supplies.jpg';

const Products = () => {
  const products = [
    {
      icon: Zap,
      title: 'Material elétrico',
      description:
        'Fios, cabos, disjuntores, tomadas, interruptores e tudo para sua instalação elétrica.',
      color: 'bg-yellow-500',
    },
    {
      icon: Droplets,
      title: 'Material hidráulico',
      description:
        'Tubos, conexões, registros, torneiras e acessórios para instalações hidráulicas.',
      color: 'bg-blue-500',
    },
    {
      icon: Wrench,
      title: 'Material mecânico',
      description:
        'Parafusos, porcas, arruelas, dobradiças e toda linha de fixadores e acessórios.',
      color: 'bg-gray-600',
    },
    {
      icon: Paintbrush,
      title: 'Tintas',
      description:
        'Tintas para paredes, madeira, metal, vernizes, solventes e acessórios de pintura.',
      color: 'bg-red-500',
    },
    {
      icon: Hammer,
      title: 'Ferramentas',
      description:
        'Ferramentas manuais e elétricas, equipamentos de segurança e proteção individual.',
      color: 'bg-orange-500',
    },
    {
      icon: Dog,
      title: 'Rações',
      description:
        'Linha completa de rações para pets, garantindo a nutrição ideal para seu animal.',
      color: 'bg-green-500',
    },
  ];

  return (
    <section id="produtos" className="section-padding bg-secondary">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-foreground font-semibold text-sm uppercase tracking-wider bg-accent px-4 py-1 rounded-full">
            Nossos produtos
          </span>
          <h2 className="heading-secondary text-foreground mt-4 mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com um portfólio amplo e atualizado, sempre acompanhando as
            tendências do setor e priorizando materiais que garantem segurança,
            durabilidade e ótimo custo-benefício.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={toolsDisplay}
              alt="Ferramentas profissionais organizadas - chaves, alicates, martelos"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={paintSupplies}
              alt="Tintas coloridas e pincéis para pintura"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={electricalSupplies}
              alt="Material elétrico - fios, cabos, disjuntores e tomadas"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={plumbingSupplies}
              alt="Material hidráulico - tubos, conexões e registros"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 ${product.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <product.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-tertiary text-foreground mb-3">{product.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>

        {/* Market Info */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="heading-tertiary text-primary-foreground mb-4">
            Mercado de atuação
          </h3>
          <p className="text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Atuamos no mercado de ferragens e materiais para construção, oferecendo
            soluções completas para obras, reformas e manutenção. Atendemos tanto
            profissionais da construção civil quanto clientes que buscam praticidade,
            variedade e qualidade para seus projetos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
