import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CleanDOM - AI-Powered DOM Pruning for Web Agents',
  description: 'Value Proposition: Provides an API that takes any URL, prunes irrelevant DOM elements (ads, scripts, hidden content) using AI, and returns a simplified, semantic HTML or structured data, making web scraping and agent navigation highly efficient and reliable.

Target Customer: Developers building LLM-based web agents, advanced web scrapers, data extraction tools, and automation platforms that require clean, focused web content for efficiency.

---
Category: Developer Tools
Target Market: Developers building LLM-based web agents, advanced web scrapers, data extraction tools, and automation platforms that require clean, focused web content for efficiency.
Source Hypothesis ID: 0d4a5a9a-a696-426a-8833-5c80c19b0cac
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">CleanDOM - AI-Powered DOM Pruning for Web Agents</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
