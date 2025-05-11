import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import The_Place from '../../Image/The_Place.jpeg'
export function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={The_Place}
              alt="הוילה - הבריכה"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-dark">ברוכים הבאים ל Royal Water Villa – נופש פרטי אמיתי</h2>
            <p className="mb-4 text-dark-light leading-relaxed">
            המקום שלנו שוכן בקריית עקרון, חצי שעה מתל אביב ומירושלים, ומציע חוויית אירוח ייחודית ואינטימית עם בריכה פרטית מהממת, אווירה שקטה ושפע של פרטיות. מדובר במתחם מוקפד ומעוצב עם שטח חוץ מרווח, בריכה פרטית גדולה, פינות ישיבה מוצלות, ותאורה קסומה לערב רומנטי או בילוי נעים עם חברים.
            </p>
            <p className="mb-4 text-dark-light leading-relaxed">
            הווילה כוללת חדר שינה מפנק, סלון נפרד הנפתח למיטה זוגית, שירותים ומקלחת פרטיים מחוץ לוילה, ומרחב חיצוני בגודל של כ־200 מ"ר . מושלם לזוגות, חברים או משפחות קטנות.
            </p>
            <p className="mb-6 text-dark-light leading-relaxed">
            .המתחם מתאים לבילוי זוגי, ימי הולדת קטנים, ימי נישואין או פשוט יום מפנק באמצע השבוע.
            
            </p>

            <div className="flex justify-center md:justify-end">
              <Button className="bg-gold hover:bg-gold-dark text-white font-almoni">
                <Link href="https://api.whatsapp.com/send?phone=972522896679">למחירים והזמנות</Link>
              </Button>
            </div>

            {/* Divider */}
            <div className="gold-divider my-8"></div>

            <p className="text-dark-light text-center leading-relaxed">
            המיקום מרכזי סמוך לביל"ו סנטר מאפשר גישה נוחה למסעדות, אטרקציות וקניות . חוויה מלאה בלי להתרחק.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
