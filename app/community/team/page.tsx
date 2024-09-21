import Link from "next/link"
import ProfileCard from "@/components/profilecard"
import PSX_20240219_195257 from "@/public/PSX_20240219_195257.jpg"

export default function TeamPage() {
  return(
    <main>
      <ProfileCard
  name="Amol Yadav"
  title="Admin"
  imgUrl="PSX_20240219_195257"
  githubUrl="https://github.com/amyssnippet"
  portfolioUrl="https://amyssnippet.vercel.app/"
  devtoUrl="https://dev.to/amyssnippet"
/> 
    </main>
  );
}
