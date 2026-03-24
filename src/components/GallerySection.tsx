import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gallery1 from "@/assets/gallery-1-enhanced.jpg";
import gallery2 from "@/assets/gallery-2-enhanced.jpg";
import gallery3 from "@/assets/gallery-3-enhanced.jpg";
import gallery4 from "@/assets/gallery-4-enhanced.jpg";
import gallery5 from "@/assets/gallery-5-enhanced.jpg";
import gallery6 from "@/assets/gallery-6-enhanced.jpg";

const images = [
  { src: gallery1, alt: "Guincho Pretos'car na oficina" },
  { src: gallery2, alt: "Transporte de empilhadeira" },
  { src: gallery3, alt: "Guincho transportando caminhonete" },
  { src: gallery4, alt: "Guincho com Nissan Frontier na cidade" },
  { src: gallery5, alt: "Guincho entregando veículo no galpão" },
  { src: gallery6, alt: "Transporte de carro clássico" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-radial-glow relative" id="fotos" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Qualidade comprovada</span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mt-3">
            Nosso <span className="gradient-text">Trabalho</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden aspect-[4/3] gradient-border"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
