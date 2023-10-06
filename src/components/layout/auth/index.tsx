import { OrnamentIcon } from "@/components/ui/icons";
import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  src: string;
  alt: string;
}

export function AuthLayout({ children, src, alt }: AuthLayoutProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2" role="auth-layout">
      <div className="hidden md:block bg-gradient-primary w-full min-h-screen relative">
        <OrnamentIcon className="absolute bottom-0 left-0" />
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          aria-label="banner"
        />
      </div>
      <main className="p-4">
        <div className="max-w-sm w-full m-auto">{children}</div>
      </main>
    </div>
  );
}
