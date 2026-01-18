export default function Hero() {
  return (
    <section className="bg-background-light py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
              Vers van de Buurt
            </h1>
            <p className="text-lg text-gray-700 md:text-xl">
              Kwaliteit lokale producten direct uit de buurt. Vers, vers en nog eens vers.
              Ontdek de beste groenten, fruit en lokale specialiteiten van Amsterdam.
            </p>
            <div className="pt-4">
              <a
                href="#producten"
                className="inline-block rounded-full bg-secondary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-secondary/90"
              >
                Bekijk Onze Producten
              </a>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-200 md:h-[500px]">
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
              <p className="text-gray-500">Hero Afbeelding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
