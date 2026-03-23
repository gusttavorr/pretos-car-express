import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const images = [
  { src: gallery1, alt: "Guincho transportando carro" },
  { src: gallery2, alt: "Guincho para motos" },
  { src: gallery3, alt: "Atendimento noturno de emergência" },
];

const GallerySection = () => (
  <section className="py-20 bg-background" id="fotos">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
        Nosso Trabalho
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.alt} className="rounded-lg overflow-hidden aspect-[4/3]">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
