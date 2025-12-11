import { motion, TargetAndTransition, VariantLabels } from "framer-motion";

const Particle: React.FC<{
  initial: TargetAndTransition | VariantLabels | boolean;
  duration: number;
}> = ({ initial, duration }) => {
  const animateY = [
    null,
    Math.random() * (typeof window !== "undefined" ? window.innerHeight : 0),
  ];

  return (
    <motion.div
      className="absolute w-1 h-1 bg-[#C79101] rounded-full"
      initial={initial}
      animate={{
        y: animateY,
        opacity: [null, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default Particle;
