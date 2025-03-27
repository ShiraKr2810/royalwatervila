import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

// Import the images directly (Corrected)
import wedding from '../../Image/wedding-icon.jpeg';
import bride from '../../Image/bride-icon.jpeg';
import vocation from '../../Image/vocation-icon.jpeg';
import love from '../../Image/love-icon.jpeg';

const features = [
  {
    icon: love, // Use the imported image directly (Corrected)
    title: "אירוח זוגות",
    href: "#"
  },
  {
    icon: vocation, // Use the imported image directly (Corrected)
    title: "אירוח משפחות",
    href: "#"
  },
  {
    icon: wedding, // Use the imported image directly (Corrected)
    title: "חבילת רומנטית ליל כלולות",
    href: "/wedding-night"
  },
  {
    icon: bride, // Use the imported image directly (Corrected)
    title: "התארגנות כלה ליל כלולות",
    href: "#"
  }
];

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="mb-4">
                  <Image
                    src={feature.icon} // Pass the image URL directly (Corrected)
                    alt={feature.title}
                    width={70}
                    height={70}
                    className="h-auto"
                  />
                </div>
                <h3 className="text-xl text-center font-almoni text-dark">
                  {feature.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}