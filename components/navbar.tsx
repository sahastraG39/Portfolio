'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = (mounted ? resolvedTheme : theme) === 'dark';

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="#about" className="font-semibold">Your Name</Link>
          <nav className="flex gap-6 items-center">
            <Link href="#about" className="hover:text-primary">About</Link>
            <Link href="#projects" className="hover:text-primary">Projects</Link>
            <Link href="#skills" className="hover:text-primary">Skills</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="rounded-md border px-3 py-1 text-sm hover:bg-muted"
            >
              {isDark ? 'Light' : 'Dark'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}


