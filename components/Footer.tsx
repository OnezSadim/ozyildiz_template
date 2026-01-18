import { MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Adres</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="mt-1 h-5 w-5 text-gray-600" />
              <div className="text-gray-700">
                <p>Straatnaam 123</p>
                <p>1012 AB Amsterdam</p>
                <p>Nederland</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Openingstijden</h3>
            <div className="flex items-start space-x-3">
              <Clock className="mt-1 h-5 w-5 text-gray-600" />
              <div className="space-y-1 text-gray-700">
                <p>Maandag - Vrijdag: 08:00 - 20:00</p>
                <p>Zaterdag: 08:00 - 18:00</p>
                <p>Zondag: 10:00 - 16:00</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact</h3>
            <div className="text-gray-700">
              <p>Email: info@versvandebuurt.nl</p>
              <p>Telefoon: +31 20 123 4567</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Vers van de Buurt. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
