import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Room from '../../Image/Room.jpg'

export function WeddingNight() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-dark">התארגנות כלה וליל כלולות – ביום המיוחד שלכם, מגיע לכם רק הטוב ביותר</h2>
            <p className="mb-4 text-dark-light leading-relaxed">
            היום הגדול הגיע – ואתם מחפשים מקום שייתן לכם שקט, פרטיות ויוקרה אמיתית?
Royal Water Villa היא הבחירה המושלמת להתארגנות כלה וליל כלולות בלתי נשכח.

            </p>
            <p className="mb-4 text-dark-light leading-relaxed">
            במהלך היום תיהני ממתחם פרטי ומעוצב בקפידה, עם חדר שינה מרווח, מראות גדולות, תאורה טבעית מהממת לצילומים, ומקום נוח למאפרת ולספר.
            הבריכה הפרטית, הפינות המוצלות והחצר המרווחת יהפכו כל תמונה לזיכרון מרגש.
            </p>
            <p className="mb-6 text-dark-light leading-relaxed">
            וכשיגיע הערב – תמתין לכם חוויה רומנטית של לילה ראשון יחד:
            מצעים נעימים, אווירה קסומה, בקבוק יין מפנק, תאורה רכה, פרטיות מוחלטת, והמון שקט להיות רק אתם.
            </p>

            {/* Divider */}
            <div className="gold-divider my-8"></div>

            <p className="mb-6 text-dark-light leading-relaxed">
            אז בואו להפוך את הרגעים הכי חשובים בחיים שלכם – לרגעים בלתי נשכחים.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
            <Image
              src={Room}
              alt="ליל כלולות "
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
