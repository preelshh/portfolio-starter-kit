import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="space-y-16">
      {/* Page Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Projects
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl">
          A selection of applied machine learning, data science, and software
          projects focused on real-world data, modeling, and system design.
        </p>
      </section>

      {/* Applied ML */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          Applied Machine Learning
        </h2>

        <article className="space-y-2">
          <h3 className="text-xl font-medium">
            Machine Learning for Gene Expression Dynamics
          </h3>
          <p className="text-neutral-300 max-w-2xl">
            Case study on modeling gene regulatory behavior across quiescent and
            non-quiescent cell states using large-scale biological data.
          </p>
          <p className="text-sm text-neutral-400">
            <strong>Tech:</strong> Python, PyTorch, scRNA-seq
          </p>
        </article>

        <article className="space-y-2">
          <h3 className="text-xl font-medium">
            Political Polarization & U.S. Elections
          </h3>
          <p className="text-neutral-300 max-w-2xl">
            Data-driven analysis of political polarization and its relationship
            to U.S. election outcomes, combining statistical modeling and
            narrative insight.
          </p>
          <p className="text-sm text-neutral-400">
            <strong>Tech:</strong> Python, scikit-learn, data analysis
          </p>
          <Link
  href="https://ucladatares.medium.com/the-effect-of-polarization-on-the-us-elections-1306ee2e6acb"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block text-sm underline underline-offset-4"
>
            Read case study →
          </Link>
        </article>
      </section>

      {/* Public ML */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          Public ML & Data Projects
        </h2>

        <article className="space-y-2">
          <h3 className="text-xl font-medium">
            Portfolio Value Calculator
          </h3>
          <p className="text-neutral-300 max-w-2xl">
            Quantitative tool for evaluating portfolio value using financial
            assumptions and modeling techniques.
          </p>
          <p className="text-sm text-neutral-400">
            <strong>Tech:</strong> Python, financial modeling
          </p>
          <a
            href="https://github.com/preelshh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm underline underline-offset-4"
          >
            View on GitHub →
          </a>
        </article>
      </section>

      {/* Software */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          Software & Systems
        </h2>

        <article className="space-y-2">
          <h3 className="text-xl font-medium">
            Billionaire Burglary (ACM Studio)
          </h3>
          <p className="text-neutral-300 max-w-2xl">
            A fun indie game developed with a small team through ACM Studio, from concept to a playable release.
          </p>
          <p className="text-sm text-neutral-400">
            <strong>Tech:</strong> Unity, C#, Git
          </p>
          <a
            href="https://camerondhughes.itch.io/billionaire-burglary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm underline underline-offset-4"
          >
            Play the game →
          </a>
        </article>
      </section>
    </main>
  );
}
