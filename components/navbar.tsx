'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = (mounted ? resolvedTheme : theme) === 'dark';

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/75 bg-white/90 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <Link
            href="/"
            className="font-bold text-2xl text-purple-600 hover:text-purple-700 transition-colors"
          >
            SG
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link
              href="#me"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Me
            </Link>
            <Link
              href="#education"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Education
            </Link>
            <Link
              href="#projects"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <Link
                href="#me"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Me
              </Link>
              <Link
                href="#education"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Education
              </Link>
              <Link
                href="#projects"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
