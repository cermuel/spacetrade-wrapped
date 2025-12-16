import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpaceTrade Wrapped",
  description: "SpaceTrade Wrapped Demo",
  icons: "/images/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link
          rel="preload"
          href="https://api.fontshare.com/css?f[]=clash-display@400,500,600,700&display=swap"
          as="style"
        />
        <link
          href="https://api.fontshare.com/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
