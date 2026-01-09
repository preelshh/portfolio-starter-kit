export default function HomePage() {
  return (
    <main className="max-w-3xl px-4 py-20 space-y-12">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Priyal Sharma
        </h1>

        <p className="text-xl text-neutral-300">
          Machine Learning & Data Science
        </p>

        <p className="text-neutral-400 text-lg leading-relaxed">
          I’m a junior at UCLA studying Statistics and Data Science, with a strong
          emphasis on mathematics, computer science, and biological modeling. I
          focus on building machine learning systems that translate mathematical
          theory into scalable, real-world applications.
        </p>

        <p className="text-neutral-500">
          Previously at Pacifico Bio and Giant Music.
        </p>
      </section>

      {/* Personality */}
      <section className="space-y-3">
        <p className="text-neutral-400">
          My work spans applied machine learning, research-driven data analysis,
          and exploratory projects where I enjoy understanding systems from first
          principles.
        </p>

        <p className="text-neutral-400">
          Outside of ML, I enjoy building indie games, playing piano, and working
          on creative projects that sit somewhere between art and engineering.
        </p>
      </section>

      {/* Soft CTA */}
      <section>
        <p className="text-neutral-300">
          You can find a selection of my work on the{" "}
          <a
            href="/projects"
            className="underline underline-offset-4 hover:text-white transition"
          >
            projects page
          </a>
          .
        </p>
      </section>
    </main>
  );
}
