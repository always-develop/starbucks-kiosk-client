import React from 'react';
import './globals.css';
import { AiOutlineHome } from 'react-icons/ai';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="w-full flex items-center justify-center relative pt-5 pb-5 border-b-[1px]">
          <div className="flex items-center gap-5">
            <img className="h-20 w-20" src="/assets/icons/logo.png" alt="로고" />
            <h1 className="text-3xl font-semibold text-gray-900">Starbucks</h1>
          </div>
          <div className="absolute right-0 mr-8">
            <AiOutlineHome className="text-3xl" />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
