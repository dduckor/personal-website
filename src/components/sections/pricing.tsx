const plans = [
  {
    name: "Portrait Session",
    price: "$350",
    description: "A two-hour session, perfect for individual or couple portraits.",
    features: [
      "Up to 2 hours",
      "One location",
      "20 edited digital files",
      "Online gallery",
    ],
  },
  {
    name: "Editorial Shoot",
    price: "$900",
    description: "Half-day coverage for brand, editorial, or commercial work.",
    features: [
      "Up to 4 hours",
      "Up to two locations",
      "50 edited digital files",
      "Usage license included",
    ],
  },
  {
    name: "Full Day",
    price: "$1,800",
    description: "A full day of coverage for events, campaigns, or documentary projects.",
    features: [
      "Up to 8 hours",
      "Unlimited locations",
      "100+ edited digital files",
      "Usage license included",
      "Second shooter available",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24 bg-stone-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-stone-900 mb-3">
          Pricing
        </h2>
        <p className="text-stone-500 mb-12 max-w-lg text-lg">
          Simple, transparent rates for common project types. Every project is
          different — reach out for a tailored quote.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-xl border border-stone-200 bg-white p-8 flex flex-col"
            >
              <h3 className="text-lg font-heading font-semibold text-stone-900">
                {plan.name}
              </h3>
              <p className="mt-1 text-stone-500 text-sm">{plan.description}</p>
              <p className="mt-6 text-3xl font-heading font-semibold text-stone-900">
                {plan.price}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-stone-600 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full bg-stone-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}