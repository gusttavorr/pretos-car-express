import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import gallery1 from "@/assets/gallery-1-enhanced.jpg";
import gallery2 from "@/assets/gallery-2-enhanced.jpg";
import gallery3 from "@/assets/gallery-3-enhanced.jpg";
import gallery4 from "@/assets/gallery-4-enhanced.jpg";
import gallery5 from "@/assets/gallery-5-enhanced.jpg";
import gallery6 from "@/assets/gallery-6-enhanced.jpg";

const images = [
  { src: gallery1, alt: "Guincho Pretos'car na oficina", tag: "Oficina" },
  { src: gallery2, alt: "Transporte de empilhadeira", tag: "Empilhadeira" },
  { src: gallery3, alt: "Guincho transportando caminhonete", tag: "Caminhonete" },
  { src: gallery4, alt: "Guincho com Nissan Frontier na cidade", tag: "Transporte" },
  { src: gallery5, alt: "Guincho entregando veículo no galpão", tag: "Entrega" },
  { src: gallery6, alt: "Transporte de carro clássico", tag: "Clássico" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-radial-glow relative" id="fotos" ref={ref}>
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">( Galeria )</span>
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-foreground leading-[0.95]">
              Nosso<br />
              <span className="gradient-text">trabalho</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-sm text-sm"
          >
            Veja alguns dos nossos atendimentos reais em São Paulo e região.
          </motion.p>
        </div>

        {/* Masonry-inspired grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelected(i)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                i === 0 || i === 3 ? "row-span-1 lg:row-span-2 aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-6">
                <span className="text-foreground font-bold font-display text-sm md:text-base">{img.tag}</span>
              </div>
              {/* Corner tag */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                {img.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
