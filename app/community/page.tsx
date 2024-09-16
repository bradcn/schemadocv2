import Link from "next/link";

export default function CommunityPage() {
  return(
    <>
    <div class="min-h-screen flex flex-col items-center">
  <header class="w-full py-6">
    <h1 class="text-center text-4xl font-bold">Community</h1>
    <p class="text-center text-lg mt-2">Explore how you can get involved with our community and contribute to the project.</p>
  </header>
  <main class="w-full flex flex-col space-y-12 mt-12">
    <section class="w-full">
      <h2 class="text-2xl font-semibold text-center">Support Page</h2>
      <p class="text-center mt-4">Get help from our community or access our support channels for assistance.</p>
      <div class="text-center mt-4">
        <Link href="/support" class="underline">Visit Support Page</Link>
      </div>
    </section>
    <section class="w-full">
      <h2 class="text-2xl font-semibold text-center">Our Team</h2>
      <p class="text-center mt-4">Meet the core members who help build and maintain this project.</p>
      <div class="text-center mt-4">
        <Link href="/team" class="underline">Meet the Team</Link>
      </div>
    </section>
    <section class="w-full">
      <h2 class="text-2xl font-semibold text-center">Resources</h2>
      <p class="text-center mt-4">Find tutorials, guides, and other resources to help you get started.</p>
      <div class="text-center mt-4">
        <Link href="/resources" class="underline">Explore Resources</Link>
      </div>
    </section>
    <section class="w-full">
      <h2 class="text-2xl font-semibold text-center">Contributing</h2>
      <p class="text-center mt-4">Learn how to contribute to our project and help improve the community.</p>
      <div class="text-center mt-4">
        <Link href="/contributing" class="underline">Start Contributing</Link>
      </div>
    </section>
    <section class="w-full">
      <h2 class="text-2xl font-semibold text-center">Release Process</h2>
      <p class="text-center mt-4">Understand our release cycle and how new features and updates are rolled out.</p>
      <div class="text-center mt-4">
        <Link href="/release-process" class="underline">View Release Process</Link>
      </div>
    </section>
    <section class="w-full">
      <h2 class="text-2xl font-semibold text-center">Frequently Asked Questions</h2>
      <p class="text-center mt-4">Got questions? We’ve got answers to the most common inquiries.</p>
      <div class="text-center mt-4">
        <Link href="/faq" class="underline">Read FAQ</Link>
      </div>
    </section>
  </main>
</div>
 </>
  );
}
