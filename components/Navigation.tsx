import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-primary">
              Vers van de Buurt
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#producten"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Producten
              </Link>
              <Link
                href="#over-ons"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Over Ons
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
