import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Cleftbar } from "@/components/cleftbar";

export const metadata: Metadata = {
  title: "Community | Schemadoc",
  metadataBase: new URL("https://schemadoc.vercel.app/community"),
  description: "Community section of Schemadoc application",
};

export default function CommunityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-14">
      <Cleftbar key="leftbar" />
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}
