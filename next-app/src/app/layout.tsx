import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { WalletProvider } from "@/components/providers/WalletProvider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { RootHeader } from "@/components/RootHeader";
import { WrongNetworkAlert } from "@/components/WrongNetworkAlert";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { RootFooter } from "@/components/RootFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aptos Full Stack Demo",
  description: "A demo of a full stack app on Aptos",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          `${inter.className} bg-[#0B1416] text-white min-h-screen flex justify-center font-sans antialiased`
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <WalletProvider>
              <main className="flex flex-col w-full max-w-[1000px] p-6 pb-12 md:px-8 gap-6">
                <WrongNetworkAlert />
                <RootHeader />
                {children}
                <Toaster />
                <RootFooter />
              </main>
            </WalletProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
