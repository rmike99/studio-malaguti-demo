"use client";

import { useProtection } from "@/hooks/use-protection";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useProtection();

  return <>{children}</>;
}