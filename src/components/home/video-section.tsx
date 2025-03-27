import React from 'react';

export function VideoSection() {
  return (
    <section className="py-16 bg-dark text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Tp2uheO9zAA"
              title="אחוזת שרה - אירוח בוטיק בכפר"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">באחוזת שרה תמצאו שקט ושלווה בסגנון הכפר</h2>
            <p className="mb-4 leading-relaxed">
              אחוזת שרה מתחם אירוח הממוקם במושב בית אלעזרי, סמוך לצומת בילו. אירוח בוטיק בכפר קסום שמציע נופש יוקרתי.
            </p>
            <p className="mb-4 leading-relaxed">
              אחוזת שרה שמחה לארח אתכם באירוח מהודר לסופ״שים, בכל ימות השבוע, באירועים מיוחדים כמו ימי הולדת, מסיבות רווקות, צילומים, התארגנות כלה ביום החתונה, מסיבות בריכה וכמובן ליל כלולות לזוגות המתחתנים.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
