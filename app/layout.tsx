import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentic Trust Foundation — Engineering Portfolio",
  description: "Evidence-driven engineering portfolio for Agentic Trust Foundation and Agent-Pay.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}