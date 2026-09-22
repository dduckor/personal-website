import Image from "next/image";

const photos = [
  { src: "https://picsum.photos/seed/photo4/800/1200", alt: "Coastal view", w: 800, h: 1200 },
  { src: "https://picsum.photos/seed/photo2/800/600", alt: "Urban street scene", w: 800, h: 600 },
  { src: "https://picsum.photos/seed/photo3/800/800", alt: "Portrait study", w: 800, h: 800 },
  { src: "https://picsum.photos/seed/photo5/800/700", alt: "Architecture detail", w: 800, h: 700 },
  { src: "https://picsum.photos/seed/photo1/800/1000", alt: "Mountain landscape", w: 800, h: 1000 },
  { src: "https://picsum.photos/seed/photo6/800/900", alt: "Forest path", w: 800, h: 900 },
];

export function MyWorkSection() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-stone-900 mb-3">
          My Work
        </h2>
        <p className="text-stone-500 mb-12 max-w-lg text-lg">
          A selection of recent projects and personal work.
        </p>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden rounded-xl bg-stone-100">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-stone-400 italic">
          Photos shown are placeholder images from picsum.photos. Replace these with your own work.
        </p>
      </div>
    </section>
  );
}