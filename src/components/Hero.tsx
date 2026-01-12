import { Phone, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-primary pt-32 md:pt-40 pb-16"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Accent decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 clip-path-diagonal hidden lg:block" />

      <div className="container-section relative z-10">
        <div className="max-w-3xl mx-auto lg:mx-0">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
              <span className="font-medium text-sm">Desde 2003 atendendo você</span>
            </div>

            <h1 className="heading-primary text-primary-foreground mb-6">
              Ferragem Rodrigues
            </h1>

            <h2 className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium">
              Onde o profissional encontra o material certo para construir, reformar e manter.
              Qualidade, variedade e atendimento especializado em um só lugar.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="https://wa.me/5551992683363"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent flex items-center justify-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                Fale pelo WhatsApp
              </a>
              <a
                href="#contato"
                className="btn-outline-light flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Como chegar
              </a>
            </div>

            {/* Quick info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Material elétrico</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Hidráulico</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Ferramentas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Tintas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
