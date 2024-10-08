import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "DevTalk Home",
  description: "Virtual gathering place for developers",
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/assets/favicon.svg",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/assets/favicon.png",
    },
  ],
  openGraph: {
    images: ['https://devtalk.club/assets/og-image.png'],
  },
  twitter: {
    images: ['https://devtalk.club/assets/og-image.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} h-max`}>
        <div id="hidden-message" className="hidden">
          If you are looking at this, yes, I am doing a simple design for now. I will update this will a full design soon.
        </div>
        {children}
      </body>
    </html>
  );
}
