import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Legalleftbar } from "@/components/legalleftbar";

export const metadata: Metadata = {
  title: "Legal | Schemadoc",
  metadataBase: new URL("https://schemadoc.vercel.app/legal"),
  description: "Legal section of Schemadoc application",
};

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-14">
      <Legalleftbar key="leftbar" />
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}
