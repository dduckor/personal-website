export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-stone-900 mb-3">
          Get in Touch
        </h2>
        <p className="text-stone-500 mb-10 text-lg">
          Whether you have a project in mind or just want to say hello, I would
          love to hear from you.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-block rounded-full border border-stone-300 px-8 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 hover:border-stone-400"
        >
          hello@example.com
        </a>
      </div>
    </section>
  );
}