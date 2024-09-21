import Link from "next/link"
import ProfileCard from "@/components/profilecard"

export default function TeamPage() {
  return (
    <main>
      <ProfileCard
        name="Amol Yadav"
        title="Admin"
        imgUrl="https://amyssnippet.vercel.app/PSX_20240219_195257.jpg"
        githubUrl="https://github.com/amyssnippet"
        portfolioUrl="https://amyssnippet.vercel.app/"
        devtoUrl="https://dev.to/amyssnippet"
      />
    </main>
  );
}
