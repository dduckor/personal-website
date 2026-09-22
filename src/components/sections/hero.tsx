import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="introduction"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-10 overflow-hidden rounded-2xl">
          <Image
            src="https://picsum.photos/seed/portrait/1200/800"
            alt="Featured photograph"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight text-stone-900 leading-tight">
          Seeing the world through a different lens.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-stone-500 leading-relaxed max-w-xl mx-auto">
          I am a photographer based in New York, working across portraiture,
          landscape, and documentary. Every frame is an attempt to hold onto
          something real.
        </p>
      </div>
    </section>
  );
}