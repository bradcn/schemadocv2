export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">Support</h1>
      
      <p className="text-lg">
        Schemadoc has a smaller community of dedicated developers, with fewer members but a strong focus on meaningful updates. On this page, we’ve listed some SchemaDoc-related community groups you can join. See other pages in this section for additional online and in-person learning materials. Before participating in Schemadoc communities, please read our code of conduct. We’ve adopted a contributor-friendly environment, and we expect all community members to adhere to the guidelines within.
      </p>

      <section>
        <h2 className="text-3xl font-semibold">Feature Requests</h2>
        <p className="text-lg">
          For new feature requests, you can create a post on GitHub Issues. GitHub Issues is a handy tool for managing feature development and allows you to start by opening an issue. It also helps track demand for specific features using labels or upvotes, making it easier to prioritize compared to other methods.
          <br />
          <br />
          Please avoid submitting full requests for larger features, especially if someone else may already be working on them, or if they are part of our roadmap. Always discuss the work first before proceeding.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold">News</h2>
        <p className="text-lg">
          For the latest news about SchemaDoc, follow us on <a href="https://daily.dev" className="underline">daily.dev</a> and check out the official SchemaDoc blog on this website.
        </p>
      </section>
    </div>
  );
}
