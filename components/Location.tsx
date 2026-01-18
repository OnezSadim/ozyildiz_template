import { MapPin, Clock } from "lucide-react";

export default function Location() {
  return (
    <section id="contact" className="bg-[#1A4D2E] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Left side - Address and Hours */}
          <div className="space-y-8 text-white">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                Bezoek Ons
              </h2>
            </div>

            {/* Address */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Adres</h3>
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="text-lg">Kerkstraat 12</p>
                  <p className="text-lg">Amsterdam</p>
                  <p className="text-lg">Nederland</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Openingstijden</h3>
              <div className="flex items-start space-x-3">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0" />
                <div className="space-y-2 text-lg">
                  <p>Maandag - Vrijdag: 08:00 - 20:00</p>
                  <p>Zaterdag: 08:00 - 18:00</p>
                  <p>Zondag: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Map */}
          <div className="w-full overflow-hidden rounded-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4872.759671958971!2d4.9323064!3d52.363532299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609729497da8f%3A0xd2eb1d2f9e4ad8b4!2sOzyildiz%20Supermarkt!5e0!3m2!1snl!2snl!4v1768743031394!5m2!1snl!2snl" width="100%"
              height="256"
              style={{ border: 0, filter: "grayscale(100%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
