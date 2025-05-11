import React from 'react';
import Image from 'next/image';
import background from "../../Image/Background.jpg";
export function Hero() {
  return (
    <div className="relative h-[70vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={background}
          alt="הוילה"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white">
        <div className="text-center">
          <Image
            src="https://ext.same-assets.com/4226829879/3064296070.png"
            alt="Gold decoration"
            width={250}
            height={100}
            className="mx-auto mb-4"
          />

          <h1 className="font-gulash text-5xl md:text-7xl mb-2">Royal Water Villa</h1>
          <p className="text-xl md:text-2xl font-almoni">אירוח יוקרתי</p>
        </div>
      </div>

      {/* {Social Icons} */}
      <div className="fixed right-6 top-1/4 transform -translate-y-1/2 z-20 flex flex-col space-y-4">
        <a
          href="https://m.facebook.com/61562746949692#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full p-2 text-blue-600 hover:text-blue-800 transition duration-300 shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </a>
        {/* <a
          href="https://www.youtube.com/watch?v=Tp2uheO9zAA"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full p-2 text-red-600 hover:text-red-800 transition duration-300 shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </a> */}
        <a
          href="https://api.whatsapp.com/send?phone=972522896679"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full p-2 text-green-600 hover:text-green-800 transition duration-300 shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
