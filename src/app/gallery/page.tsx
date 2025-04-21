

import Img1 from '../../Image/Img1.jpeg';
import Img2 from '../../Image/Img2.jpg';
import Img3 from '../../Image/Img3.jpg';
import Img5 from '../../Image/Img5.jpg';
import Img6 from '../../Image/Img6.jpg';
import Img8 from '../../Image/Img8.jpeg';
import Img9 from '../../Image/Img9.jpeg';
import Img10 from '../../Image/Img (1).jpeg';
import Img11 from '../../Image/Img (2).jpeg';
import Img12 from '../../Image/Img15.jpeg';
import Img14 from '../../Image/Img9.jpeg';
import Img15 from '../../Image/Img11.jpeg';
import Img18 from '../../Image/Img (5).jpeg';
import Img19 from '../../Image/Img14.jpeg';
import Image from 'next/image';

const images = [
  Img1,
  Img15,
  Img19, 
  Img3,
  Img2,
  Img5,
  Img8,
  Img6,
  Img9,
  Img10,
  Img12,
  Img11,
  Img14,
  Img18
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 mt-20">גלריית הצימר</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={image}
              alt={`Zimmer Image ${index + 1}`}
              width={500}
              height={300}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
