import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ReduxProvider from "@/src/providers/ReduxProvider";
import "@/app/globals.css";
import "@/app/font.css";
import NextUIProvider from "@/src/providers/NextUIProvider";
import ThemeProvider from "@/src/providers/ThemeProvider";
import NavbarApplication from "@/src/components/Navbar";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alpha Geek",
  description: "A Web Application to reonvent yourself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <body className={roboto.className}>
          <NextUIProvider>
            <NavbarApplication />
            {children}
          </NextUIProvider>
        </body>
      </ThemeProvider>
    </ReduxProvider>
  );
}
