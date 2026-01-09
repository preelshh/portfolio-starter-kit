export default function ContactPage() {
  return (
    <main className="max-w-3xl px-4 py-20 space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">
        Contact
      </h1>

      <p className="text-neutral-400 text-lg">
        Feel free to reach out.
      </p>

      <p className="text-neutral-300">
        <a
          href="mailto:priyalsh@g.ucla.edu"
          className="underline underline-offset-4 hover:text-white transition"
        >
          priyalsh@g.ucla.edu
        </a>
      </p>
    </main>
  );
}
