"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook } from "lucide-react";
import logo from "../../Image/logo.jpeg";

export function Footer() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget; // Store reference to form element
    const formData = new FormData(form);

    formData.append("access_key", "1c0f058f-4d37-4ef3-9bc3-ab34fd3d448e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Form submitted successfully!");
        if (form) form.reset(); // Check if form still exists before resetting
      } else {
        setStatus("Submission failed. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error submitting form:", error);
    }
  };


  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Contact Section */}
        <div className="text-center md:text-right">
          <div className="mb-4 flex justify-center md:justify-end">
            <Link href="/">
              <Image
                src={logo}
                alt="Royal Water Villa"
                width={150}
                height={75}
                className="h-auto"
              />
            </Link>
          </div>

          <div className="mb-4 text-lg">הגפן 3 קרית עקרון</div>

          {/* Google Maps */}
          <div className="w-full h-64 bg-gray-200 rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510696.7450039231!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b7815985d8cb%3A0xb99e19070d009d32!2z15TXktek158gMywg16fXqNeZ16og16LXp9eo15XXnw!5e0!3m2!1siw!2sil!4v1742893294043!5m2!1siw!2sil"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gold p-6 rounded-md">
          <h3 className="text-xl font-bold mb-4 text-center">צור איתנו קשר</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="שם מלא"
                className="w-full px-3 py-2 rounded-md bg-gold-light text-gray-800 placeholder-gray-700 border border-yellow-700"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="אימייל"
                className="w-full px-3 py-2 rounded-md bg-gold-light text-gray-800 placeholder-gray-700 border border-yellow-700"
              />
            </div>
            <div>
              <textarea
                name="message"
                required
                placeholder="הודעה"
                rows={4}
                className="w-full px-3 py-2 rounded-md bg-gold-light text-gray-800 placeholder-gray-700 border border-yellow-700"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white px-8 py-2 rounded-md hover:bg-gray-700 transition duration-300 w-full"
            >
              שליחה
            </button>
          </form>
          {status && <p className="mt-2 text-center text-sm text-gray-200">{status}</p>}
        </div>
      </div>

      {/* Social Links */}
      <div className="container mx-auto mt-8 flex justify-center space-x-4">
        <a
          href="https://m.facebook.com/61562746949692/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-full text-yellow-500 hover:text-yellow-700 transition duration-300"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=972522896679"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-full text-yellow-500 hover:text-yellow-700 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
