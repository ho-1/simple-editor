import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '@/lib/registry'
import RecoilContextProvider from '@/recoil/recoil-context-provider'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Editor",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <RecoilContextProvider>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </RecoilContextProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
