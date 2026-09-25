import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentic Trust Foundation — The Trust Layer for the Agentic Internet",
  description: "Agentic Trust Foundation defines a trust, delegation and access layer for controlled agentic actions, with Agent-Pay providing the financial control layer.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}