import type { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Community | Schemadoc",
  metadataBase: new URL("https://schemadoc.vercel.app/community"),
  description: "Community section of Schemadoc application",
};

export default function CommunityLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-start justify-center pt-8 pb-10 md:w-[70%] mx-auto">
      {children}
    </div>
  );
}
