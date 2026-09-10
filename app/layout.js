import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://muhammadadeel.dev"),
  title: "Muhammad Adeel | AI Undergraduate & Builder of Intelligent Systems",
  description:
    "Artificial Intelligence undergraduate building intelligent AI systems for real-world problems — machine learning, computer vision, NLP, RAG, and AI agents.",
  keywords: [
    "Muhammad Adeel",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "NLP",
    "RAG",
    "AI Agents",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Adeel" }],
  openGraph: {
    title: "Muhammad Adeel | AI Undergraduate & Builder of Intelligent Systems",
    description:
      "Artificial Intelligence undergraduate building intelligent AI systems for real-world problems.",
    url: "https://muhammadadeel.dev",
    siteName: "Muhammad Adeel Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Adeel | AI Undergraduate",
    description:
      "Artificial Intelligence undergraduate building intelligent AI systems for real-world problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#06060a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:rounded-md focus:bg-accent-blue focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
