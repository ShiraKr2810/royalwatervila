"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import logo from "../../Image/logo.jpeg";

const navItems = [
  { label: "הווילה", href: "/" },
  { label: "גלריה", href: "/gallery" },
  // { label: "מחירים", href: "/prices" },
  // { label: "צור קשר ומפה", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container-custom py-2 flex items-center justify-between">
        {/* Phone number */}
        <div className="flex items-center text-dark-light">
          <Phone className="w-4 h-4 ml-1" />
          <span className="text-xs">052-289-6679</span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-dark-light"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 flex-row-reverse">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="text-dark-light hover:text-gold px-2 py-1 block">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logo */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
          <Link href="/">
            <div className="bg-gold bg-opacity-90 px-4 py-2 rounded-b-lg shadow-md">
              <Image src={logo} alt="Royal Water Villa" width={120} height={60} className="h-auto" />
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block text-right text-dark-light hover:text-gold px-3 py-2"
              onClick={() => setMobileMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
