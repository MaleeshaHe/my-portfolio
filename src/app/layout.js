import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Maleesha Herath - Fullstack Software Engineer",
  description:
    "Passionate fullstack software engineer intern skilled in building scalable web and mobile applications using Next.js, React, Flutter, and more.",
  keywords: [
    "Maleesha Herath",
    "Fullstack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Flutter",
    "JavaScript",
    "Python",
    "Web Development",
    "Mobile Development",
    "Portfolio",
    "Sri Lanka",
  ],
  authors: [{ name: "Maleesha Herath" }],
  creator: "Maleesha Herath",
  publisher: "Maleesha Herath",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maleeshaherath.me",
    title: "Maleesha Herath - Fullstack Software Engineer",
    description:
      "Passionate fullstack software engineer intern skilled in building scalable web and mobile applications using Next.js, React, Flutter, and more.",
    siteName: "Maleesha Herath Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maleesha Herath - Fullstack Software Engineer",
    description:
      "Passionate fullstack software engineer intern skilled in building scalable web and mobile applications using Next.js, React, Flutter, and more.",
    creator: "@maleeshaherath",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FF4533" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
