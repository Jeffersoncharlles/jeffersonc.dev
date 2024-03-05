import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jeffersonc",
  description: "website do jefferson charlles , aqui voce consegue contato com o jeffersonc.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 min-h-screen min-w-full antialiased text-slate-200 relative">{children}</body>
    </html>
  );
}
