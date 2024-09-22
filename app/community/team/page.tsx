import Link from "next/link"
import ProfileCard from "@/components/profilecard"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Community | Schemadoc",
  metadataBase: new URL("https://schemadoc.vercel.app/community/team"),
  description: "Team page in Community section of Schemadoc documentation",
};

export default function TeamPage() {
  return (
    <main className="max-w-4xl mx-auto my-6">
      <h1 className="text-4xl font-bold my-4">Team</h1>
      <p className="text-lg my-4">
        The Schemadoc team works on the core functionality, as well as the Schemadoc documentation website.
      </p>
      <br />
      <p className="text-lg my-4">
        Current members of the Schemadoc team are listed below.
      </p>
      <ProfileCard
        name="Amol Yadav"
        title="Admin"
        imgUrl="https://amyssnippet.vercel.app/PSX_20240219_195257.jpg"
        githubUrl="https://github.com/amyssnippet"
        portfolioUrl="https://amyssnippet.vercel.app/"
        devtoUrl="https://dev.to/amyssnippet"
      />
      <br />
      <ProfileCard
        name="Dinesh Verma"
        title="Contributor"
        imgUrl="https://dineshverma.vercel.app/dinesh1.jpg"
        githubUrl="https://github.com/DineshVerma-dev"
        portfolioUrl="https://dineshverma.vercel.app/"
        devtoUrl="https://dev.to/dinesh_verma"
      />
    </main>
  );
}
