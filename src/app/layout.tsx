import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
import { siteConfig } from "@/config/site";
import AdSense from "@/components/adsense";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techtipshub.vercel.app"), // <-- set your actual site domain here

  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <AdSense pubId="ca-pub-6721594154492556" />
        <meta
          name="google-site-verification"
          content="jJtpLqOAtKxVMyWZ3fZTjPVLW8xexGIU7rV1Enr4cRI"
        />
      </head>
      <GoogleTagManager gtmId="G-M37M4689E8" />
      <GoogleAnalytics gaId="G-M37M4689E8" />
      <body className={clsx(`bg-background antialiased ${inter.className}`)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
