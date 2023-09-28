import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Z",
  description:
    "Platform that facilitating for connections people with the same hobbies or passions to build community or team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
