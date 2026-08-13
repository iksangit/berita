import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TranslationProvider } from "@/providers/translation-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Iksan",
  url: "https://iksan.dev",
  jobTitle: "Software Engineering Student & Junior Full-Stack Developer",
  sameAs: [
    "REPLACE_WITH_GITHUB_URL",
    "REPLACE_WITH_LINKEDIN_URL",
    "REPLACE_WITH_INSTAGRAM_URL",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Iksan — Full-Stack Developer & Software Engineering Student",
    template: "%s | Iksan",
  },
  description:
    "Personal portfolio of Iksan, a Software Engineering Student and Junior Full-Stack Developer building modern web and mobile applications.",
  keywords: [
    "Iksan",
    "Full-Stack Developer",
    "Software Engineering",
    "Next.js",
    "TypeScript",
    "Flutter",
    "Portfolio",
    "Web Developer",
    "Mobile Developer",
  ],
  authors: [{ name: "Iksan" }],
  creator: "Iksan",
openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iksan.dev",
    siteName: "Iksan — Portfolio",
    title: "Iksan — Full-Stack Developer & Software Engineering Student",
    description:
      "Personal portfolio of Iksan, a Software Engineering Student and Junior Full-Stack Developer building modern web and mobile applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iksan — Full-Stack Developer & Software Engineering Student",
    description:
      "Personal portfolio of Iksan, a Software Engineering Student and Junior Full-Stack Developer building modern web and mobile applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <TranslationProvider>{children}</TranslationProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
